from joblib import load
from sklearn.tree import export_text
import numpy as np

# Load trained model and scaler
model = load('concentration_model.joblib')
scaler = load('rgb_scaler.joblib')

# Extract and print 3 trees
for i in range(3):
    tree = model.estimators_[i]
    print(f"\nTree {i}:")
    print(export_text(tree, feature_names=['R', 'G', 'B']))