


(()=>{
    const image_input_to_style = document.getElementById("image-input-to-style");
    image_input_to_style.addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            document.getElementById("display-image-to-style").style.backgroundImage = `url(${uploaded_image})`;
        });
        reader.readAsDataURL(this.files[0]);
    });

    const image_input_style = document.getElementById("image-input-style");

    image_input_style.addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            document.getElementById("display-image-style").style.backgroundImage = `url(${uploaded_image})`;
        });
        reader.readAsDataURL(this.files[0]);
    });


    let url = 'http://localhost:8080/api/receive/VGG19';
    window.addEventListener('DOMContentLoaded', (event) => {
        let form = document.getElementById('form');

        form.addEventListener('submit', function (e) {
            let fileOriginal = image_input_to_style.files[0];
            let fileStyle = image_input_style.files[0];
            e.preventDefault();
            console.log(fileStyle);
            console.log(fileOriginal);
            const formData = new FormData();
            formData.append("original_image", fileOriginal);
            formData.append("style_image", fileStyle);

            axios
                .post("http://localhost:8080/api/receive/VGG19", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    });

})()




