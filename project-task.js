/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================


//-----------Answers----------------------------------
/*  
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
---------------------------------------
1.
  • What was wrong?
     A comma was missing after "checkInDate": "2024-05-15"
  • Why is it a problem in JSON?
    JSON requires commas to separate key-value pairs in an object.
    Without the comma, the JSON cannot be parsed.	
  • What did you change to fix it?
    Added a comma after the checkInDate property.

-------------------------------------------
  2. 
   • What was wrong?
      The property name was not enclosed in double quotes (name: "Alice Johnson")
   • Why is it a problem in JSON?
      	In JSON, all property names must be enclosed in double quotes.	
   • What did you change to fix it?
      Changed name to "name"
 ---------------------------------------------------
 3.
   • What was wrong?
      The value undefined was used for "age".
   • Why is it a problem in JSON?
      		undefined is not a valid JSON data type. 
          JSON only supports strings, numbers, booleans, objects, arrays, and null.	
   • What did you change to fix it?
      	Replaced undefined with null.
  --------------------------------------------------------------
4.
   • What was wrong?
      There was a trailing comma after "Parking" in the amenities array.
   • Why is it a problem in JSON?
      JSON does not allow a comma after the last item in an array or object.	
   • What did you change to fix it?
      	Removed the trailing comma after "Parking".

*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
  I copied the corrected JSON (without the const declaration and backticks) into JSONLint
   (https://jsonlint.com/). 
  The validator confirmed that the JSON is valid with no syntax errors.

2️⃣ How did you confirm that your corrected JSON file was valid?
  I pasted the corrected JSON into JSONLint. 
  The validator reported that the JSON was valid with no syntax errors.

3️⃣ Which errors were the most difficult to spot? Why?
  The missing comma after checkInDate was the most difficult to spot 
  because a single missing comma can make the entire JSON invalid.
   The trailing comma in the array was also easy to overlook.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   I can use syntax highlighting, JSON validators, linters, and proper code formatting. 
   Writing JSON in small sections and validating it frequently also helps catch errors early.
*/
