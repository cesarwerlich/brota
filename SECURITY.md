# SECURITY.md — Security & Family Privacy Policy

## 1. Child & Family Safety Policy

Brota is a private/family educational tool used with Cesar's goddaughter. The following rules are non-negotiable for all contributors and AI agents:

1. **No Personally Identifiable Information (PII)**:
   - Do not commit or log real names, ages, birthdays, school locations, or residential addresses.
   - User settings and plant notes must remain private to the device or user account.

2. **Photo & Content Privacy**:
   - Plant photographs uploaded for diagnosis must only be processed ephemerally by the AI model.
   - Never store, publish, or publicly expose personal photographs containing faces or domestic private spaces.

3. **Age-Appropriate AI Interactions**:
   - The conversational gardening persona ("Flora") must always maintain an educational, respectful, encouraging, and safe tone for children.
   - Do not include adult topics, aggressive language, or medical advice for humans.

---

## 2. Secrets & API Keys

- **Never commit `.env` files or API credentials** to version control.
- `OPENROUTER_API_KEY` is loaded securely via environment variables.
- All AI endpoints enforce sliding-window rate limiting, input boundary delimiters, and max-token caps to prevent prompt injection and token depletion.
- In production hosting, inject secrets using the hosting platform's native secret manager.

---

## 3. Reporting Vulnerabilities

If you discover any security issue or privacy concern:
1. Contact Cesar Werlich privately via GitHub or email (`cesar@werlich.me`).
2. Do not open public GitHub issues for sensitive security or privacy vulnerabilities.
