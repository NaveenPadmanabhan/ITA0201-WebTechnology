# IT Service Request Management System — VS Code

A modern UI implementation of the Web Technology Unit IV Assessment II:
**Industry Problem Solving Task**.

## Requirements covered

- MVC architecture
- `serviceRequest.jsp` as the View/input form
- `ServiceRequest.java` as the Model
- `ServiceRequestServlet` as the Controller
- POST form submission
- `request.getParameter()` for all submitted fields
- Server-side validation for mandatory fields and valid category/priority values
- Request-specific local variables inside the Servlet
- Service request number in `SR-xxxx` format
- Request attributes for the Model and request number
- Forwarding to `acknowledgement.jsp`
- Confirmation page showing all required request details
- MVC explanation on the acknowledgement page
- Responsive modern UI

## Tech stack

- Java 11+
- Jakarta Servlet 5.0
- JSP
- Apache Tomcat 10+
- Maven
- Visual Studio Code

## Project structure

```text
IT_Service_Request_Management_System/
├── pom.xml
├── README.md
├── PROJECT_NOTES.txt
└── src/
    └── main/
        ├── java/
        │   └── com/itservice/
        │       ├── controller/
        │       │   └── ServiceRequestServlet.java
        │       └── model/
        │           └── ServiceRequest.java
        └── webapp/
            ├── index.jsp
            ├── serviceRequest.jsp
            ├── acknowledgement.jsp
            ├── css/
            │   └── style.css
            └── WEB-INF/
                └── web.xml
```

# Run using VS Code

## 1. Install Java

Install **JDK 11 or newer** and verify it in the VS Code terminal:

```bash
java -version
javac -version
```

## 2. Install Apache Tomcat

Use **Apache Tomcat 10.x**, because this project uses Jakarta Servlet 5 (`jakarta.servlet.*`).

Extract Tomcat somewhere on your computer, for example:

```text
C:\apache-tomcat-10
```

## 3. Install VS Code extensions

In VS Code, install:

- **Extension Pack for Java** — Microsoft
- **Maven for Java** — Microsoft
- **Community Server Connectors** — Red Hat

The Community Server Connectors extension can be used to register and start Tomcat from VS Code.

## 4. Open the project

In VS Code:

**File → Open Folder**

Select:

```text
IT_Service_Request_Management_System
```

Do not open only the `src` folder. Open the folder containing `pom.xml`.

## 5. Build the project

Open:

**Terminal → New Terminal**

Run:

```bash
mvn clean package
```

If Maven is not installed globally but the Maven wrapper is available, use:

```bash
mvnw.cmd clean package
```

The WAR will be generated at:

```text
target/IT-Service-Request-Management-System.war
```

## 6. Run on Tomcat from VS Code

Using **Community Server Connectors**:

1. Open the **Servers** view in VS Code.
2. Add/register your extracted Apache Tomcat 10 installation.
3. Start the Tomcat server.
4. Deploy the generated WAR:
   `target/IT-Service-Request-Management-System.war`
5. Open:

```text
http://localhost:8080/IT-Service-Request-Management-System/
```

The application redirects to the service request form.

## Alternative: run the WAR manually

If you do not want to use the VS Code server UI:

1. Run:

```bash
mvn clean package
```

2. Copy:

```text
target/IT-Service-Request-Management-System.war
```

into Tomcat's:

```text
webapps
```

folder.

3. Start Tomcat:

Windows:

```text
apache-tomcat-10\bin\startup.bat
```

4. Open:

```text
http://localhost:8080/IT-Service-Request-Management-System/
```

To stop Tomcat:

```text
apache-tomcat-10\bin\shutdown.bat
```

## MVC flow

Employee
→ `serviceRequest.jsp`
→ POST
→ `ServiceRequestServlet`
→ validate input
→ create `ServiceRequest`
→ set request attributes
→ forward
→ `acknowledgement.jsp`
→ confirmation

This matches the expected application flow in the assessment document.

## Important

This project does **not require Eclipse**.

VS Code is used for editing, Maven is used for building, and Apache Tomcat is used as the Java web server.
