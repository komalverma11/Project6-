const jobs = [
      {
        company: "Punjab IT Solutions Pvt. Ltd.",
        district: "Ludhiana",
        address: "IT Park, Ludhiana, Punjab",
        workType: "IT Support and Network Management",
        qualification: "Diploma",
        contact: { email: "contact@punjabitsolutions.com", mobile: "+91 98765 43210" },
        description: "Handling technical support and maintaining network infrastructure for clients."
      },
      {
        company: "Amrit Engineering Works",
        district: "Amritsar",
        address: "Engineering Complex, Amritsar, Punjab",
        workType: "Mechanical Maintenance and Production",
        qualification: "Diploma",
        contact: { email: "hr@amritengineering.com", mobile: "+91 99876 54321" },
        description: "Overseeing mechanical maintenance and production processes for manufacturing plant."
      },
      {
        company: "Punjab Agro Industries Corporation Ltd.",
        district: "Patiala",
        address: "Agro Complex, Patiala, Punjab",
        workType: "Agricultural Technician",
        qualification: "Diploma",
        contact: { email: "careers@punjabagro.com", mobile: "+91 98765 54321" },
        description: "Managing agro-based technologies and providing technical support to farmers."
      },
      {
        company: "Chandigarh Electronics Pvt. Ltd.",
        district: "Patiala",
        address: "Electronics Park, Mohali, Punjab",
        workType: "Electronics and Hardware Engineering",
        qualification: "Degree",
        contact: { email: "support@chandigarhelectronics.com", mobile: "+91 99887 65432" },
        description: "Repairing and maintaining electronic devices and systems for the company."
      },
      {
        company: "Punjab Power Corporation Ltd.",
        district: "Bhatinda",
        address: "Power Complex Bhatinda, Punjab",
        workType: "Electrical Engineer",
        qualification: "Diploma",
        contact: { email: "hr@punjabpower.com", mobile: "+91 98765 43210" },
        description: "Handling electrical installations, power distribution, and maintaining electrical system."
      },
      {

        company: "Mohali Construction Pvt. Ltd.",
        district: "Mohali",
        address: "Construction Yard, Mohali, Punjab",
        workType: "Civil Engineer",
        qualification: "Diploma",
        contact: { email: "careers@mohaliconstruction.com", mobile: "+91 99876 54321" },
        description: "Overseeing construction projects, ensuring the safety and quality of buildings and infrastructure."
  },
      {
        company: "Punjab State Transportation Corporation",
        district: "Jalandhar",
        address: "Transport Hub, Jalandhar, Punjab",
        workType: "Driver and Transport Supervisor",
        qualification: "10th/12th pass, Driver’s License",
        contact: { email: "transport@punjabstc.com", mobile: "+91 98765 67890" },
        description: "Managing transport operations, ensuring timely vehicle maintenance and scheduling."
  },
      {
        company: "Ludhiana Textile Mills",
        district: "Ludhiana",
        address: "Textile Complex, Ludhiana, Punjab",
        workType: "Textile Engineer",
        qualification: "Degree",
        contact: { email: "hr@ludhianatextiles.com", mobile: "+91 99888 12345" },
        description: "Overseeing textile manufacturing processes and ensuring product quality control."
  },
      {
        company: "Mohali Healthcare Solutions",
        district: "Mohali",
        address: "Health Park, Mohali, Punjab",
        workType: "Medical Assistant",
        qualification: "Degree",
        contact: { email: "info@mohalihealthcare.com", mobile: "+91 98765 12345" },
        description: "Assisting doctors and medical staff with patient care and administrative tasks."
  },
      {
        company: "Punjab Software Innovations Pvt. Ltd.",
        district: "Amritsar",
        address: "Software Park, Amritsar, Punjab",
        workType: "Software Developer",
        qualification: "Degree",
        contact: { email: "jobs@punjabsoftware.com", mobile: "+91 99987 65432" },
        description: "Developing and testing software applications for various business needs."
  }
    ];

    document.getElementById("search-btn").addEventListener("click", function() {
      const selectedDistrict = document.getElementById("district").value;
      const selectedQualification = document.getElementById("qualification").value;

      if (!selectedDistrict || !selectedQualification) {
        alert("Please select both district and qualification.");
        return;
      }

      const filteredJobs = jobs.filter(job =>
        job.district === selectedDistrict && job.qualification === selectedQualification
      );

      localStorage.setItem("jobResults", JSON.stringify(filteredJobs));
      window.location.href = "output.html";
    });
