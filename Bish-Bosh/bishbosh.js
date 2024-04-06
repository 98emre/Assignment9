

let runBishBosh = () => {

    const loop = document.getElementById("loop").value;
    const bish = document.getElementById("bish").value;
    const bosh = document.getElementById("bosh").value;
    const output = document.getElementById("output");

    output.innerHTML = "";

    for(let i = 1; i<=loop; i++){
        if(i % bish == 0 && i % bosh == 0){
            output.innerHTML += "Bish-Bosh ";
        }

        else if(i % bish == 0){
            output.innerHTML += "Bish ";
        }

        else if(i % bosh == 0){
            output.innerHTML += "Bosh ";
        }

        else{
            output.innerHTML += i + " ";
        }
    }

    console.log("här " + output);
}