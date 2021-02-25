$(function() { // will run when the page is ready
    $('.tombolTambahData').on('click', function(){
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/tambah');
        $('#judulModal').html('Tambah Data Mahasiswa');
        $('#nama').val(null);
        $('#nrp').val(null);
        $('#email').val(null);
        $('#jurusan').val(null);
    });
    
    $('.tampilModalUbah').on('click', function (){
        $('#judulModal').html('Ubah Data Mahasiswa');
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah');
        const id = $(this).data('id');


        $.ajax({
            url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data){ // the echo-ed json data from Mahasiswa/getubah will be passed to this 'data'
                $('#nama').val(data['nama']);
                $('#nrp').val(data['nrp']);
                $('#email').val(data['email']);
                $('#jurusan').val(data['jurusan']);
                $('#id').val(data['id']);
            }
        });

    });
})