function changeText() {
            let text = document.getElementById("inputText").value;
            document.getElementById("heading").innerHTML = text;
        }

        function changeColor() {
            document.body.style.backgroundColor = "#d1ecf1";
        }

        function increaseSize() {
            document.getElementById("heading").style.fontSize = "40px";
        }

        function togglePara() {
            let para = document.getElementById("para");
            if (para.style.display === "none") {
                para.style.display = "block";
            } else {
                para.style.display = "none";
            }
        }

        function resetPage() {
            document.getElementById("heading").innerHTML = "Welcome to JavaScript Lab";
            document.body.style.backgroundColor = "#f0f0f0";
            document.getElementById("heading").style.fontSize = "24px";
            document.getElementById("para").style.display = "block";
            document.getElementById("inputText").value = "";
        }