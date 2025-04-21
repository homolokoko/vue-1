export default{

    fileToBase(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                resolve(reader.result); // This will be the Base64 string
            };

            reader.onerror = () => {
                reject(new Error('Failed to convert image to Base64'));
            };

            reader.readAsDataURL(file); // Read the file as a data URL
        });
    }

}