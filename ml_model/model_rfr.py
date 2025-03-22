import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
from sklearn.preprocessing import MinMaxScaler
from joblib import dump

# Load CSV
data = pd.read_csv('color_readings.csv')

# Map labels to numerical values for regression
label_to_value = {'NEGATIVE': 0, 'LOW': 25, 'MODERATE': 50, 'HIGH': 100}
data['Concentration_numeric'] = data['Concentration'].map(label_to_value)

# Augment: Triple to 72 rows
augmented_data = []
for _ in range(2):  # 24 → 72
    noisy_data = data.copy()
    noise = np.random.uniform(-5, 5, (len(data), 3))
    noisy_data[['R', 'G', 'B']] += noise
    noisy_data[['R', 'G', 'B']] = noisy_data[['R', 'G', 'B']].clip(0, 255)
    augmented_data.append(noisy_data)

full_data = pd.concat([data] + augmented_data, ignore_index=True)
full_data[['Concentration', 'R', 'G', 'B']].to_csv('augmented_readings.csv', index=False)
print(f"Augmented to {len(full_data)} rows")

# Train on numeric values
X = full_data[['R', 'G', 'B']]
y = full_data['Concentration_numeric']
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)
dump(scaler, 'rgb_scaler.joblib')

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.25, random_state=42)
model = RandomForestRegressor(
    n_estimators=15,
    max_depth=5,
    min_samples_leaf=2,
    random_state=42
)
model.fit(X_train, y_train)

# Evaluate
preds = model.predict(X_test)
mae = mean_absolute_error(y_test, preds)
print(f"MAE: {mae:.2f}%")

# Save model
dump(model, 'concentration_model.joblib')

# Function to map numeric predictions back to labels
def predict_label(pred):
    if pred < 12.5:
        return "NEGATIVE"
    elif pred < 37.5:
        return "LOW"
    elif pred < 75:
        return "MODERATE"
    else:
        return "HIGH"

# Test predictions
test_samples = np.array([
    [185, 165, 90],  # NEGATIVE
    [150, 130, 140], # LOW
    [120, 100, 165], # MODERATE
    [90, 75, 190]    # HIGH
])
test_scaled = scaler.transform(test_samples)
pred_conc = model.predict(test_scaled)
pred_labels = [predict_label(c) for c in pred_conc]
for rgb, conc, label in zip(test_samples, pred_conc, pred_labels):
    print(f"RGB: {rgb}, Predicted Conc: {conc:.2f}%, Level: {label}")