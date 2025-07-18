# Use official Python base image
FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend and frontend build
COPY backend/ .

# Expose port
EXPOSE 5000

# Run the app
CMD ["python", "app.py"]
