# ===== Builder Stage =====
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /app

# Install CA certs early so Maven can also use them if needed
RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates

COPY . .
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# ===== Runtime Stage =====
FROM eclipse-temurin:21-jre
WORKDIR /app

# Install CA certificates in the runtime container
RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/target/*.jar app.jar

# Make sure the container uses the env var for MongoDB
# This ensures Spring Boot picks up MONGODB_URI from Render
ENV SPRING_DATA_MONGODB_URI=${MONGODB_URI}

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
