 function cetak_gambar(panjang) {


            let output = [];
            let printOutput = '';

            if (panjang % 2 == 0) {
                return 'harus memasukan angka ganjil';
            }

            for (var i = 0; i < panjang; i++) {

                let baris = '';
                let a = 0;
                while (a < panjang) {
                    if (a == 0) { baris += '*' }
                    if (a == panjang - 1) { baris += '*' }
                    if (a != 0 && a != panjang - 1) {
                        baris += '=';
                    }

                    a++;

                }

                output.push(baris);

            }

            let change = Math.floor(output.length / 2);
            output[change] = output[change].replace(/=/g, '*');

            for (var i = 0; i < output.length; i++) {
                printOutput += output[i] + '\n';
            }

            return ' ' + printOutput.split('').join(' ');

        }





        console.log(cetak_gambar(5));