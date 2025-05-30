import Metadata from "@/components/utilities/metadata";

const ExperiencePage = () => {
  return (
    <>
      <Metadata
        title="Portofolio - Pengalaman"
        description="Berikut adalah pengalaman kerja yang saya miliki"
        image="/metadata/home.png"
        url="pengalaman"
      />

      <section
        id="pengalaman"
        className="pb-32 pt-36 transition-all duration-300 dark:bg-dark"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Pengalaman
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
                      November 2023 - Sekarang
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      PT.Aretanet Indonesia
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Penguji Eksternal Uji Kompetensi Keahlian (UKK)
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Bertugas sebagai penguji eksternal UKK di berbagai SMK jurusan TKJ, termasuk:
                     SMK Islamiyah Ciputat
                     SMK Bina Mandiri
                      </p>
                    </div>

                    <br></br>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                     Asisten Trainer Pra (UKK)
                    </p>
                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                     Berperan aktif dalam kegiatan pelatihan pra UKK sebagai asisten trainer di:
                     SMK Dewi Sartika,
                     SMK Bina Mandiri,
                     SMK Islamiyah Ciputat,
                     SMK Binong Permai
                      </p>
                    </div>

                    <br></br>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                     Persiapan UKK & ERP
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Cek Resource dan kebutuhan yang digunakan untuk UKK di SMK Kutabumi 1 Tangerang
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Cek Resource dan kebutuhan yang digunakan untuk penerapan  ERP pada perusahaan CKDU
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Input Data perusahaan CKDU yang akan digunakan pada ERP
                      </p>
                    </div>

                    <br></br>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                    Web Content Administrator
                    </p>


                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Memperbarui konten situs web secara rutin, termasuk artikel, gambar, dan produk.
                      </p>
                    </div>


                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Menjaga konsistensi dan kualitas informasi pada situs perusahaan.
                      </p>
                    </div>


                    <br></br>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                    Teknis IT Support
                    </p>


                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Melakukan instalasi sistem operasi: Ubuntu, Windows, dan Zorin OS untuk perangkat lab dan kantor.
                      </p>
                    </div>
 
                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                      Melakukan pembongkaran dan perakitan kembali perangkat jaringan Cisco untuk kebutuhan praktikum dan pelatihan jaringan.
                      </p>
                    </div>
                  </div>
                </li>

                {/* <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      September 2024 - November 2024
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      BuildWithAngga
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Backend Laravel - Internship
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Membuat fitur saved article di website BuildWithAngga
                        menggunakan framework Laravel.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Kolaborasi menggunakan Version Control System (Git &
                        GitHub) dengan developer lain.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Mempelajari Unit Testing pada framework Laravel
                        menggunakan PHPUnit.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Membuat ebook dengan judul{" "}
                        <b>
                          Kelas Online Laravel 11 Service Repository Pattern
                          menggunakan Filament: Web Event dan Workshop Ticket
                        </b>
                        .
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Menyiapkan materi dan menjadi speaker dari webinar
                        dengan judul{" "}
                        <b>Pengenalan System Administration & DNS Server</b>.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      Juni 2023 - Oktober 2023
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      PT CITRA JELAJAH INFORMATIKA
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      System Administrator - Full Time
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Menginstal, mengonfigurasi, dan memelihara server DNS
                        (PowerDNS, BIND), Web (Apache, Nginx), Basis Data (MySQL
                        / MariaDB, MongoDB), Mail (Postfix, Dovecot, Roundcube),
                        Pemantauan (Grafana, Prometheus, Cacti, PRTG, Zabbix,
                        The Dude)
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Menangani server cPanel & CentOS CWP
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Virtualisasi (Proxmox dan VMware ESXi)
                      </p>
                    </div>
                  </div>
                </li> */}

                {/* Thrid Item */}
                {/* <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      Juni 2021 - Juni 2023
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      PT CITRA JELAJAH INFORMATIKA
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Network Engineer - Full Time
                    </p>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Menganalisa, mendesain, dan memasang kebutuhan jaringan
                        di gedung, mall, sekolah, hotel, dll.
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Engineer on Site
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Menangani Perangkat Wireless (Ruijie, Ubiquiti / Unifi,
                        TP-Link), Router (Mikrotik, Cisco), Switch Management
                        (Cisco, Arista)
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Bekerja di Network Operation Center (NOC) dan Registrasi
                        Modem menggunakan GPON OLT ZTE
                      </p>
                    </div>

                    <div className="flex-start flex items-center">
                      <div className="mr-3 h-[8px] w-[8px] rounded-full bg-dark dark:bg-white"></div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Memonitoring Lalu Lintas Jaringan menggunakan The Dude,
                        Zabbix, Cacti
                      </p>
                    </div>
                  </div>
                </li> */}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
