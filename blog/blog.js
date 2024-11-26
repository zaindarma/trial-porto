// Buat variabel untuk menampung data blog dalam array kosong
let blogs = []; // Data Array

// Function untuk membuat suatu fungsi untuk app kita
function addBlog(event) {
    // Event.preventDafault untuk mencegah halaman ter-refresh saat fungsi di trigger
    event.preventDefault();

    let title = document.getElementById("input-blog-title").value; // Data tunggal
    let content = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image");

    image = URL.createObjectURL(image.files[0]); // Untuk ambil data gambar

    // Data objek
    const blog = {
        blogTitle: title,
        blogContent: content,
        blogImage: image,
        author: "Zain Darma",
    };

    // Push : method array untuk nambahin data baru ke dalam array
    blogs.push(blog);

    console.log(blogs);

    renderBlog();
}

// Fungsi untuk merender konten blog ke blog list
function renderBlog () {
    // Akses elemen dengan id contents
    let contentContainer = document.getElementById("contents")

    contentContainer.innerHTML = ""; // Inject/Menyisipkan elemen html

    // Looping tiap data di array(blogs) dan render data ke html
    for(let i = 0; i<blogs.length; i++){
        contentContainer.innerHTML += `
        <div id="contents" class="blog-list">   
            <div class="blog-list-item">
                <div class="blog-image">
                    <img src="${blogs[i].blogImage}" alt="blog image">
                </div>
                <div class="blog-content">
                    <h1>${blogs[i].blogTitle}</h1>
                    <span class="detail-blog-content">26 Nov 2024 09:00 | ${blogs[i].author}</span>
                    <p>${blogs[i].blogContent}</p>
                </div>
            </div>
        </div>
        `
    }

}
