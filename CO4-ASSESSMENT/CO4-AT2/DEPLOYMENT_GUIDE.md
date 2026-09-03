# Deployment Guide for IT Service Request Management System

## Build Status
✅ **Successfully Built** - The WAR file has been generated.

### Built WAR File Location
```
c:\Users\LEN\Downloads\IT_Service_Request_Management_System\target\IT-Service-Request-Management-System.war
```

## Deployment Instructions

### Option 1: Deploy to Apache Tomcat (Recommended)

1. **Download and Install Apache Tomcat 10+**
   - Download from: https://tomcat.apache.org/download-10.cgi
   - Extract to a location like `C:\apache-tomcat-10`

2. **Copy the WAR File**
   ```
   Copy the IT-Service-Request-Management-System.war file to:
   C:\apache-tomcat-10\webapps\
   ```

3. **Start Tomcat**
   - Windows: Run `C:\apache-tomcat-10\bin\startup.bat`
   - Tomcat will automatically extract and deploy the WAR

4. **Access the Application**
   ```
   http://localhost:8080/IT-Service-Request-Management-System/
   ```

### Option 2: Deploy Using VS Code Server Connectors

1. Install **Community Server Connectors** extension in VS Code
2. Register your Tomcat 10 installation in the Servers view
3. Start the Tomcat server
4. Deploy the WAR file through the UI

## Application Flow

1. **Home Page**: `http://localhost:8080/IT-Service-Request-Management-System/`
   - Redirects to the service request form

2. **Service Request Form** (`serviceRequest.jsp`)
   - Employee ID
   - Employee Name
   - Department
   - Problem Category
   - Problem Description
   - Priority Level

3. **Servlet Processing** (`ServiceRequestServlet`)
   - Validates all mandatory fields
   - Generates unique service request number (SR-xxxx format)
   - Creates `ServiceRequest` model object
   - Forwards to acknowledgement page

4. **Acknowledgement Page** (`acknowledgement.jsp`)
   - Displays submitted service request details
   - Shows MVC architecture explanation

## Requirements Met

- ✅ MVC Architecture (JSP View, Servlet Controller, Java Model)
- ✅ POST form submission
- ✅ Server-side validation
- ✅ Service request number in SR-xxxx format
- ✅ Request attributes and forwarding
- ✅ Modern responsive UI
- ✅ Jakarta Servlet 5.0 compatible
- ✅ Java 11+ compatible

## Tech Stack

- Java 11+
- Jakarta Servlet 5.0
- JSP
- Apache Tomcat 10+
- Maven
- HTML/CSS (responsive design)

## Build Commands

To rebuild the project:
```powershell
$env:PATH = "C:\apache-maven-3.9.6\bin;$env:PATH"
cd "c:\Users\LEN\Downloads\IT_Service_Request_Management_System"
mvn clean package
```

The generated WAR will be at: `target/IT-Service-Request-Management-System.war`

## Troubleshooting

- **Tomcat won't start**: Ensure Java is installed and JAVA_HOME is set
- **Port 8080 already in use**: Change Tomcat's port in `conf/server.xml`
- **WAR not deploying**: Check Tomcat's `logs/` directory for error messages
