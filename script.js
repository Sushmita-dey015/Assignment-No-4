
(function() {
    var names = ["Anna", "John", "Jerry", "Jimmy", "Rahul", "Sushmita", "Riya", "Irfan", "Aslam", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();