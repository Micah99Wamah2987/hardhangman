function checktoexit() {
    var result = confirm('Are you sure?');
    if (result == false) {
      var result = confirm('Are you very sure?');
      if (result == false) {
        event.preventDefault();
      }
      else {
        window.close();
        window.open('C:/Users/Micah Wamah/Desktop/Programming/Web2Games/index.html');
      }
    }
    else {
      window.close();
      window.open('C:/Users/Micah Wamah/Desktop/Programming/Web2Games/index.html');
    }
  }