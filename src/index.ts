import "./styles.css";

(function () {
  function example(): void {
    console.log("hello typescript");
  }

  example();

  document.getElementById("example").addEventListener("click", () => {
    alert("Button Clicked");
  });
})();
