
// رسالة ترحيب عند فتح الصفحة الرئيسية
window.addEventListener("load", function() {
  if (document.title.includes("التراث | الصفحة الرئيسية")) {
    alert("أهلاً بك في موقع التراث ");
  }
});

// تفاعل مع النماذج (Contact و Join)
document.addEventListener("DOMContentLoaded", function() {
  const forms = document.querySelectorAll("form");
  
  forms.forEach(form => {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // منع الإرسال الحقيقي
      alert("تم إرسال النموذج بنجاح ✅ شكراً لتواصلك معنا!");
      form.reset(); // إعادة تعيين الحقول
    });
  });
});

// تأثير بسيط على الروابط في القائمة
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "underline";
  });
  link.addEventListener("mouseout", () => {
    link.style.textDecoration = "none";
  });
});
// رسالة ترحيب عند فتح الصفحة الرئيسية
window.addEventListener("load", function() {
  if (document.title.includes("التراث | الصفحة الرئيسية")) {
    alert("أهلاً بك في موقع التراث 🌿");
  }
});

// تفاعل مع النماذج (Contact و Join)
document.addEventListener("DOMContentLoaded", function() {
  const forms = document.querySelectorAll("form");
  
  forms.forEach(form => {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // منع الإرسال الحقيقي
      alert("تم إرسال النموذج بنجاح ✅ شكراً لتواصلك معنا!");
      form.reset(); // إعادة تعيين الحقول
    });
  });
});

// تأثير بسيط على الروابط في القائمة
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "underline";
  });
  link.addEventListener("mouseout", () => {
    link.style.textDecoration = "none";
  });
});

// زر العودة للأعلى
document.addEventListener("DOMContentLoaded", function() {
  const backToTop = document.createElement("button");
  backToTop.textContent = "⬆ العودة للأعلى";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.padding = "10px 15px";
  backToTop.style.backgroundColor = "#002b5c";
  backToTop.style.color = "#fff";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "5px";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// سلايدر بسيط للصور في المعرض
document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallery");
  if (gallery) {
    let index = 0;
    const images = gallery.querySelectorAll("img");
    setInterval(() => {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
      index = (index + 1) % images.length;
    }, 3000); // كل 3 ثواني تتغير الصورة
  }
});