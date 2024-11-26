function sendEmail () {
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let emailReceiver = "darma.nh34@gmail.com";

    // createElement : untuk buat element HTML <a> baru
    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`; // Format kirim email
    a.target = "_blank";
    a.click(); // Trigger fungsi klik pada elemen <a>
}
