# SQL Command Reference

This file contains SQL commands and examples covering DDL, DML, DCL, and cascading foreign keys.

---

## 1. Table Creation and Referential Integrity (Cascading)

Below is an example demonstrating `PRIMARY KEY`, `CHECK` constraints, `FOREIGN KEY` constraints, and cascading referential integrity (`ON DELETE CASCADE` and `ON UPDATE CASCADE`).

### Creating the Student and Course Tables

```sql
-- Parent Table
CREATE TABLE DEMO_STUDENT (
    student_uid INT PRIMARY KEY,
    student_name VARCHAR(100),
    age INT CHECK (age >= 18)
);

-- Child Table with Cascading Actions
CREATE TABLE student_course (
    course_id INT PRIMARY KEY,
    student_uid INT,
    course_name VARCHAR(100),
    FOREIGN KEY (student_uid)
        REFERENCES DEMO_STUDENT(student_uid)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);
```

### Inserting Data

```sql
-- Inserting into parent table
INSERT INTO DEMO_STUDENT (student_uid, student_name, age)
VALUES 
(1, 'ANAY', 18),
(2, 'Vikas', 19);

-- Query parent table
SELECT * FROM DEMO_STUDENT;

-- This insert will FAIL because student_uid 3 does not exist in DEMO_STUDENT
-- INSERT INTO student_course VALUES (101, 3, 'JAVA');

-- Valid insertions
INSERT INTO student_course (course_id, student_uid, course_name)
VALUES 
(101, 1, 'JAVA'),
(102, 2, 'PYTHON');

-- Query child table
SELECT * FROM student_course;
```

### Cascading Delete Operation
Deleting a student from the parent table automatically deletes the associated courses in the child table.

```sql
DELETE FROM DEMO_STUDENT
WHERE student_uid = 1;
```

---

## 2. Data Definition Language (DDL)

DDL commands are used to define or modify the structure of database objects (like tables). Common DDL commands include `CREATE`, `ALTER`, `RENAME`, `TRUNCATE`, and `DROP`.

### Example Employee Table

```sql
CREATE TABLE Emp_krg (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    salary NUMERIC(10, 2)
);

INSERT INTO Emp_krg (emp_id, emp_name, salary) 
VALUES
(101, 'Rahul', 50000),
(102, 'Priya', 60000),
(103, 'Amit', 55000);

SELECT * FROM Emp_krg;
```

### Schema Alterations (`ALTER TABLE`)

#### I. Add a Column
```sql
ALTER TABLE Emp_krg
ADD COLUMN gender VARCHAR(10);
```

#### II. Add a Constraint (e.g., SET NOT NULL)
```sql
ALTER TABLE Emp_krg
ALTER COLUMN gender SET NOT NULL;
```

#### III. Change Data Type of a Column
```sql
ALTER TABLE Emp_krg
ALTER COLUMN gender TYPE VARCHAR(100);
```

#### IV. Rename a Column
```sql
ALTER TABLE Emp_krg
RENAME SALARY TO emp_salary;
```

#### V. Rename a Table
```sql
ALTER TABLE Emp_krg
RENAME TO SAMPLE_EMP_NAME;

SELECT * FROM SAMPLE_EMP_NAME;
```

#### VI. Drop a Column
```sql
ALTER TABLE SAMPLE_EMP_NAME
DROP COLUMN gender;
```

#### VII. Truncate Table (Removes all rows, keeps schema)
```sql
TRUNCATE TABLE SAMPLE_EMP_NAME;
```

#### VIII. Drop Table (Deletes schema and data entirely)
```sql
DROP TABLE SAMPLE_EMP_NAME;
```

---

## 3. Data Manipulation Language (DML)

DML commands are used to insert, update, or delete data within database tables. Common DML commands include `INSERT`, `UPDATE`, and `DELETE`.

### Examples

```sql
-- Update gender based on IDs (using OR - note: check boolean logic)
UPDATE Emp_krg
SET gender = 'Male'
WHERE emp_id = 101 OR emp_id = 103;

-- Update gender using IN operator
UPDATE Emp_krg
SET gender = 'Male'
WHERE emp_id IN (101, 103);

UPDATE Emp_krg
SET gender = 'Female'
WHERE emp_id IN (102);

-- Delete records matching a condition
DELETE FROM Emp_krg
WHERE emp_id % 2 = 1;

SELECT * FROM Emp_krg;
```

---

## 4. Library Database Case Study

A sample database setup for a library system.

```sql
-- 1. Create Tables
CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    publisher VARCHAR(100),
    price NUMERIC(8, 2)
);

CREATE TABLE Members (
    member_id INT PRIMARY KEY,
    member_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15)
);

CREATE TABLE Issue_Record (
    issue_id INT PRIMARY KEY,
    book_id INT,
    member_id INT,
    issue_date DATE,
    return_date DATE,
    FOREIGN KEY (book_id) REFERENCES Books(book_id),
    FOREIGN KEY (member_id) REFERENCES Members(member_id)
);

-- 2. Insert Records
INSERT INTO Books VALUES
(101, 'Database System Concepts', 'Korth', 'McGraw Hill', 650.00),
(102, 'Operating System', 'Galvin', 'Wiley', 750.00),
(103, 'Computer Networks', 'Tanenbaum', 'Pearson', 800.00);

INSERT INTO Members VALUES
(1, 'Rahul Sharma', 'rahul@gmail.com', '9876543210'),
(2, 'Priya Singh', 'priya@gmail.com', '9876501234'),
(3, 'Amit Kumar', 'amit@gmail.com', '9988776655');

INSERT INTO Issue_Record VALUES
(1001, 101, 1, '2026-07-01', '2026-07-15'),
(1002, 102, 2, '2026-07-02', '2026-07-16');

-- 3. Query Tables
SELECT * FROM Books;
SELECT * FROM Members;
SELECT * FROM Issue_Record;
```

---

## 5. Database Control Language (DCL) - Roles and Permissions

DCL commands manage user access and permissions in the database.

```sql
-- View current user
SELECT CURRENT_USER;

-- Create a login role
CREATE ROLE CU_LIB
WITH LOGIN PASSWORD 'lib@1234';

-- Grant access permissions
GRANT SELECT, INSERT, DELETE, UPDATE 
ON Books, Members, Issue_Record
TO CU_LIB;

-- Revoke access permissions
REVOKE SELECT, INSERT, DELETE, UPDATE 
ON Books, Members, Issue_Record
FROM CU_LIB;
```