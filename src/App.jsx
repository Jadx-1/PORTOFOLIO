import DataImage from "./data"
import {listTools, listProyek} from "./data"

function App() {
    return (
        <>
        <div className="hero grid md:grid-cols-2  items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
            <div className="animate__animated animate__fadeInUp">
                <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
                    <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
                    <p>buah apa yang paling manis?😂</p>
                </div>
                <h1 className="text-5xl/tight font-bold mb-6">Halo, Nama Saya Akhdan Prajadisa</h1>
                <p className="text-base/loose mb-6 opacity-50">Saya adalah siswa Jurusan Pengembangan Perangkat Lunak, saya tertatik dalam bidang rekayasa. saat ini saya sedang belajar dan mencari ilmu yang terkadang sulit namun saya harus semangat karena itu keinginan saya sedari awal.</p>
                <div className="flex item-center sm:gap-4 gap-2">
                    <a href="#" className="bg-red-900 p-4 rounded-2xl hover:bg-red-600">Download CV <i className="ri-download-fill ri-lg"></i></a>
                    <a href="#proyek" className="bg-red-900 p-4 rounded-2xl hover:bg-red-600"><i className="ri-binoculars-fill ri-lg p-1"></i>Lihat Project</a>
                </div>
                </div>
                     <img src= {DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInDown animate_delay-3s" loading="lazy"/>
                </div>

                {/*Bagian-tentang*/}
                <div className="tentang mt-32 py-10" id="tentang">
                  <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                   <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
                    <p className="text-base/loose mb-10">
                        Saat ini, saya sedang terus belajar dan mengembangkan kemampuan di bidang pemrograman, pengembangan web,
                         serta teknologi informasi lainnya. Dalam proses belajar tersebut, saya sering menghadapi berbagai tantangan 
                         dan materi yang tidak mudah untuk dipahami. Namun, saya percaya bahwa setiap kesulitan merupakan bagian dari 
                         proses yang akan membantu saya menjadi pribadi yang lebih baik dan lebih kompeten di masa depan.
                     </p>
                 
                  <div className="flex items-center justify-between">
                    <img src={DataImage.HeroImage} alt="IMAGE" className="w-12 rounded-md sm:block hidden"/>
                    <div className="flex items-center gap-6">
                        <div>
                            <h1 className="text-4xl mb-1">
                               3<span className="text-red-500">+</span>
                            </h1>
                            <p>Proyek Selesai</p>
                        </div>
                    </div>
                     <div>
                        <div>
                            <h1 className="text-4xl mb-1">
                                2<span className="text-red-500">+</span>
                            </h1>
                            <p>Tahun Pengalaman</p>
                        </div>
                    </div>
                  </div>
                  </div>

                  <div className="tools mt-32">
                    <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
                    <p className="xl:w-2/5 lg:2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut tools yang biasa saya pakai untuk pembuatan web maupun design</p>
                    <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm-grid-cols-2 grid-cols-1 gap-4">


                    {listTools.map(tool => (
                             <div className="flex items-center gap-2 p-3  border border-zinc-600 rounded-md 
                        hover:bg-zinc-800 group" key={tool.id}  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                            <img src={tool.gambar} alt="Tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                            <div>
                                <h4 className="font-bold">{tool.nama}</h4>
                                <p className="opacity-50">{tool.ket}</p>
                            </div>
                        </div>
                    ))}


                       
                    </div>
                  </div>

                </div>
                {/*Bagian-tentang*/}

                {/*Project*/}
                <div className="proyek mt-32 py-10" id="proyek">
                <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Project</h1>
                <p className="text-base/loose text-center opaciy-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa project yang telah selesai</p>
                <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listProyek.map(proyek => (
                    <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
                        <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
                        <div>
                            <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                            <p className="text-base/loose mb-4">{proyek.desk}</p>
                            <div className="flex flex-wrap gap-2">
                                {proyek.tools.map((tool, index) =>(
                                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-500 rounded-md font-semiBbold" key={index}>{tool}</p>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <a
                                    href={proyek.link || '#'}
                                    className="bg-red-600 p-3 rounded-lg text-white border border-zinc-600 hover:bg-red-700"
                                    target={proyek.link ? "_blank" : undefined}
                                    rel={proyek.link ? "noopener noreferrer" : undefined}
                                >
                                    Lihat Website
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                {/*Project*/}

                {/*Kontak*/}
                <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
                    <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
                    <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya.</p>
                    <form action="https://formsubmit.co/prajadisa2025@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold">Nama Lengkap</label>
                                <input type="text" name="nama" placeholder="Masukan Nama.." className="border border-zinc-500 p-2 rounded-md" required/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold">Email</label>
                                <input type="email" name="email" placeholder="Masukan email.. (Asli)" className="border border-zinc-500 p-2 rounded-md" required/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="pesan" className="font-semibold">Pesan</label>
                               <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan.." className="border border-zinc-500 p-2 rounded-md" required></textarea>
                            </div>
                            <div className="text-center">
                              <button className="bg-red-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-red-600" type="submit">Kirim Pesan</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/*Kontak*/}
            
        </>
    );
}

export default App;
