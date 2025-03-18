document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.style.width = "250px";
    container.style.border = "1px solid #ccc";
    container.style.padding = "10px";
    container.style.textAlign = "center";
    container.style.borderRadius = "10px";
    container.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.1)";
    
    const totalLabel = document.createElement("h2");
    totalLabel.textContent = "Total";
    
    const totalCount = document.createElement("input");
    totalCount.type = "text";
    totalCount.value = "0";
    totalCount.readOnly = true;
    totalCount.style.textAlign = "center";
    totalCount.style.marginBottom = "10px";
    
    function createCounter(label, imgSrc) {
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.justifyContent = "center";
        wrapper.style.flexDirection = "column";
        wrapper.style.marginTop = "10px";
        
        const image = document.createElement("img");
        image.src = imgSrc;
        image.style.width = "50px";
        image.style.height = "50px";
        image.style.marginBottom = "5px";
        
        const nameLabel = document.createElement("span");
        nameLabel.textContent = label;
        nameLabel.style.fontWeight = "bold";
        
        const controls = document.createElement("div");
        controls.style.display = "flex";
        controls.style.alignItems = "center";
        
        const minusButton = document.createElement("button");
        minusButton.textContent = "-";
        minusButton.style.margin = "5px";
        minusButton.style.backgroundColor = "red";
        
        const countInput = document.createElement("input");
        countInput.type = "text";
        countInput.value = "0";
        countInput.readOnly = true;
        countInput.style.width = "30px";
        countInput.style.textAlign = "center";
        
        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.style.margin = "5px";
        plusButton.style.backgroundColor = "green"
        
        plusButton.addEventListener("click", function () {
            countInput.value = parseInt(countInput.value) + 1;
            totalCount.value = parseInt(totalCount.value) + 1;
        });
        
        minusButton.addEventListener("click", function () {
            if (parseInt(countInput.value) > 0) {
                countInput.value = parseInt(countInput.value) - 1;
                totalCount.value = parseInt(totalCount.value) - 1;
            }
        });
        
        controls.appendChild(minusButton);
        controls.appendChild(countInput);
        controls.appendChild(plusButton);
        
        wrapper.appendChild(image);
        wrapper.appendChild(nameLabel);
        wrapper.appendChild(controls);
        
        return wrapper;
    }
    
    const menCounter = createCounter("Homens", "homem.png");
    const womenCounter = createCounter("Mulheres", "mulher.png");

    const resetButton = document.createElement("button");
    resetButton.textContent = "Resetar";
    resetButton.style.marginTop = "10px";
    resetButton.style.padding = "5px 10px";
    resetButton.style.cursor = "pointer";

    const resetImage = document.createElement("img");
    resetImage.src = "reset.png";
    resetImage.style.width = "30px";
    resetImage.style.height = "30px";

    resetButton.appendChild(resetImage);

    resetButton.addEventListener("click", function () {
        totalCount.value = "0";
        menCounter.querySelector("input").value = "0";
        womenCounter.querySelector("input").value = "0";
    });
    
    container.appendChild(totalLabel);
    container.appendChild(totalCount);
    container.appendChild(menCounter);
    container.appendChild(womenCounter);
    container.appendChild(resetButton);
    
    document.body.appendChild(container);
});
