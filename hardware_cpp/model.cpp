#define BUTTON_PIN 2  // Trigger 30s delay

// TCS3200 pins (adjust to your setup)
#define S0 26
#define S1 27
#define S2 14
#define S3 12
#define OUT 13

float predict_concentration(float r, float g, float b) {
    if (b <= 117) return 0.0;      // NEGATIVE
    else if (b <= 155) return 25.0; // LOW
    else if (b <= 180) return 50.0; // MODERATE
    else return 100.0;             // HIGH
}

void setup() {
    Serial.begin(115200);
    pinMode(BUTTON_PIN, INPUT_PULLUP);
    pinMode(S0, OUTPUT);
    pinMode(S1, OUTPUT);
    pinMode(S2, OUTPUT);
    pinMode(S3, OUTPUT);
    pinMode(OUT, INPUT);
    digitalWrite(S0, HIGH);  // 20% frequency scaling
    digitalWrite(S1, LOW);
}

void loop() {
    if (digitalRead(BUTTON_PIN) == LOW) {  // Active low
        Serial.println("Drop solution, waiting 30s...");
        delay(30000);  // Wait 30s
        
        float r, g, b;
        readRGB(&r, &g, &b);
        
        float conc = predict_concentration(r, g, b);
        String level = (conc < 12.5) ? "NEGATIVE" : (conc < 37.5) ? "LOW" : 
                       (conc < 75) ? "MODERATE" : "HIGH";
        
        Serial.print("RGB: [");
        Serial.print(r); Serial.print(", ");
        Serial.print(g); Serial.print(", ");
        Serial.print(b); Serial.print("], Conc: ");
        Serial.print(conc); Serial.print("%, Level: ");
        Serial.println(level);
        
        delay(1000);  // Pause before next reading
    }
    delay(100);  // Debounce
}

void readRGB(float* r, float* g, float* b) {
    digitalWrite(S2, LOW);  digitalWrite(S3, LOW);  // Red
    *r = pulseIn(OUT, LOW) / 10.0;  // Calibrate divisor
    
    digitalWrite(S2, HIGH); digitalWrite(S3, HIGH); // Green
    *g = pulseIn(OUT, LOW) / 10.0;
    
    digitalWrite(S2, LOW);  digitalWrite(S3, HIGH); // Blue
    *b = pulseIn(OUT, LOW) / 10.0;
}