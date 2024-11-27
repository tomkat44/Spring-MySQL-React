FROM maven:3.9-eclipse-temurin-17-alpine as build

WORKDIR /app

COPY pom.xml ./

COPY src src/

RUN mvn clean package -D skipTests

# Run the app in a minimal java container

FROM eclipse-temurin:17-jre-alpine

VOLUME /tmp

EXPOSE 8080

ARG JAR_FILE=/app/target/*.jar

COPY --from=build ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]




##################################################################
# # Use the official Maven image as the base image
# FROM maven:3.8.4-openjdk-17 AS build
#
# # Set the working directory
# WORKDIR /app
#
# # Copy the pom.xml and any other necessary configuration files
# COPY ./pom.xml /app
# COPY ./src /app/src
#
# # Build the application
# #RUN mvn clean package -Dmaven.test.skip=true
# RUN mvn clean
# RUN mvn install
#
# # Create a new image for running the application
# FROM openjdk:17-jdk
#
# # Set the working directory
# WORKDIR /app
#
# # Copy the built JAR file from the previous stage
# COPY --from=build app/target/*.jar app.jar
#
# # Expose the port on which the Spring Boot application will run
# EXPOSE 8080
#
# # Command to run the application
# CMD ["java", "-jar", "app.jar"]

########################################################3
# FROM openjdk:17-jdk-slim
# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar
# ENTRYPOINT ["java", "-jar", "/app.jar"]

#######################################################
# FROM openjdk:17-alpine
# WORKDIR /opt
# COPY target/*.jar /opt/app.jar
# ENTRYPOINT exec java $JAVA_OPTS -jar app.jar