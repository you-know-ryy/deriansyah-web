import Metadata from "@/components/utilities/metadata";

const EducationPage = () => {
  return (
    <>
      <Metadata
        title="Portofolio - Pendidikan"
        description="Berikut adalah pendidikan yang saya tempuh"
        image="/metadata/home.png"
        url="pendidikan"
      />

      <section
        id="pendidikan"
        className="pb-32 pt-36 transition-all duration-300 dark:bg-dark"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Pendidikan
              </h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white">
                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      September 2023 - Sekarang
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      STMIK Masadepan
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      S1 Teknik Informatika
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Mempelajari Web Programming, Membangun website dinamis dengan fokus pada struktur HTML, 
                      styling menggunakan TailwindCSS, serta interaksi menggunakan JavaScript.
                      dan membuat website sampai terindeks di no 1 google/seo.
                      </p>
                    </div>
{/* 
                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari RDBMS atau Relationship Database Management
                        System menggunakan MySQL / MariaDB, dan PostgreSQL
                      </p>
                    </div> */}

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari Linux Server Administration Menggunakan distribusi Linux untuk menjalankan Apache Web Server, MariaDB,Zimbra serta layanan jaringan lainnya.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari Database Management, Mengelola dan mengoperasikan basis data menggunakan MySQL sebagai backend untuk aplikasi web.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari DevOps Fundamentals: Memahami konsep dasar CI/CD (Continuous Integration & Deployment) 
                        sebagai bagian dari alur kerja pengembangan modern.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                       Mempelajari Jaringan Komputer Belajar dasar-dasar konfigurasi dan troubleshooting jaringan menggunakan perangkat Cisco dan MikroTik.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Mempelajari dasar-dasar pemrograman Python, termasuk penggunaan variabel,
                      kondisi, perulangan, fungsi, serta dasar OOP (Object Oriented Programming).
                      </p>
                    </div>
                  </div>
                </li>

                {/* <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      Februari 2024 - Juli 2024
                    </p>
                  </div> */}
                  {/* <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      Bangkit Academy 2024 Batch 1 - Distinction Graduate, Grade
                      92.56 / 100 (A)
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Cloud Computing
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Menangani Deployment Resources Google Cloud Platform
                        untuk Proyek Capstone (Infrastruktur, Perancangan
                        Arsitektur, Manajemen Akses Identitas)
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Membuat Back-End RESTful API dengan Modern Stack dan
                        Secure menggunakan Docker, JWT, Zod, OpenAPI atau
                        Swagger dll
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Membuat CI/CD Pipeline pada Deployment Menggunakan
                        GitHub Actions untuk Build Docker Image dan Men-deploy
                        ke Cloud Run Service (serverless atau PaaS)
                      </p>
                    </div>
                  </div>
                </li> */}

                {/* Second Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      2022 - 2023
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      SMAN 1 Leuwidamar
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                     MIPA (Matematika dan Ilmu Pengetahuan Alam)
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Mempelajari dasar-dasar ilmu eksakta seperti
                      Matematika (logika, aljabar, statistika),Fisika (mekanika, listrik, dan gelombang),
                      
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Kimia (struktur atom, reaksi kimia, larutan),Biologi (sel, genetika, ekosistem)
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationPage;
