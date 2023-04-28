function validateForm() {
    let x = document.forms["nomuser"]["user"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }