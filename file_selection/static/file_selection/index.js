$(document).ready(function () {
    // Checks if user has preset preference for color mode
    var darkMode;
    if (localStorage.getItem("mode") == "dark") {
        initializeColor("dark");
        darkMode = true;
    } else {
        initializeColor("light");
        darkMode = false;
    }

    // Sets inital color mode based on users stored preference (light or dark mode)
    function initializeColor(type) {
        var backgroundColor = '';
        var textColor = '';

        if (type == "dark") {
            document.getElementById('darkMode').innerHTML = 'Light Mode';
            backgroundColor = '#333';
            textColor = 'rgb(210, 210, 210)';
        } else {
            document.getElementById('darkMode').innerHTML = 'Dark Mode';
            backgroundColor = 'white';
            textColor = 'black';
        }

        $('body').css({
            "background-color": backgroundColor,
            "color" : textColor
        });
        document.getElementById('taglineSpan').style.color = 'black';
    }


    // Allows users to switch between to light and dark mode
    $('#darkMode').click(function () {
        if (!darkMode) {
            localStorage.setItem("mode", "dark");
            document.getElementById('darkMode').innerHTML = 'Light Mode';
            document.getElementsByTagName('body')[0].style.backgroundColor = '#333';
            document.getElementById('tagline').style.color = 'rgb(210, 210, 210)';
            darkMode = true;
        } else {
            localStorage.setItem("mode", "light");
            document.getElementById('darkMode').innerHTML = 'Dark Mode';
            document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
            document.getElementById('tagline').style.color = 'black';
            darkMode = false;
        }
        document.getElementById('taglineSpan').style.color = 'black';
    });
});