<?php

class Mahasiswa_model {
    private $mhs = [
        [
            "nama" => "Sandhika Galih",
            "nrp" => "043004023",
            "email" => "sandhikagalih@mail.com",
            "jurusan" => "Teknik Informatika"
        ],
        [
            "nama" => "Doody Ferdiansyah",
            "nrp" => "043004024",
            "email" => "doddy@mail.com",
            "jurusan" => "Teknik Meka"
        ],
        [
            "nama" => "Jony Firmansyah",
            "nrp" => "043004025",
            "email" => "jony@mail.com",
            "jurusan" => "Teknik Mesin"
        ]
    ];

    public function getAllMahasiswa(){
        return $this->mhs;
    }
}