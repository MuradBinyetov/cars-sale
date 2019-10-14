let inp = create('input', ['form-control','col-3'], con);
            inp.setAttribute('type', 'number');
            inp.setAttribute('placeholder','Odeyeceyiniz meblegi daxil edin');
     

            let btn = create('button', ['btn', 'btn-success', 'd-block'], con);
            btn.innerText = 'hesabla';

            btn.addEventListener('click', function () {
                if (inp.value >= mawin.mawin1.kredit && inp.value < mawin.mawin1.nagd) {
                    let a = mawin.mawin1.nagd;
                    let b = inp.value;
                    let btn6 = create('button', ['btn', 'btn-primary'], con);
                    btn6.innerText = '6 ay';

                    let btn12 = create('button', ['btn', 'btn-primary'], con);
                    btn12.innerText = '12 ay';

                    let btn18 = create('button', ['btn', 'btn-primary'], con);
                    btn18.innerText = '18 ay';

                    let p = create('p', '', con);

                    if (btn6.addEventListener('click', function () {
                        p.innerText ='Qalan meblegin 6 aya olan kredit faizi:'+" "+ Math.round((a-b)+(a - b) * 4 / 6);

                        let form = create('form', ['pt-5', 'col-3'], con);

                        let label = create('label', '', form);
                        label.setAttribute('for', 'kart');
                        label.innerText = 'Kartinizin wifresini daxil edin';

                        let kart = create('input', ['form-control'], form);
                        kart.setAttribute('id', 'kart');
                       
                        let label1 = create('label', '', form);
                        label1.setAttribute('for', 'tarix');
                        label1.innerText = 'Kartinizin bitme tarixini daxil edin';

                        let tarix = create('input', ['form-control'], form);
                        tarix.setAttribute('id', 'tarix');

                        let label2 = create('label', '', form);
                        label2.setAttribute('for', 'cvv');
                        label2.innerText = '3 reqemli kodu daxil edin';

                        let cvv = create('input', ['form-control'], form);
                        cvv.setAttribute('id', 'cvv');

                        let pay = create('button', ['btn', 'btn-success'], form);
                        pay.innerText = 'Ode';
                        pay.addEventListener('click', function () {
                        })
                    })) { }


                    if (btn12.addEventListener('click', function () {
                        p.innerText ='Qalan meblegin 12 aya olan kredit faizi:'+" "+ Math.round((a-b)+(a - b) * 10 / 12);

                        let form = create('form', ['pt-5', 'col-3'], con);

                        let label = create('label', '', form);
                        label.setAttribute('for', 'kart');
                        label.innerText = 'Kartinizin wifresini daxil edin';

                        let kart = create('input', ['form-control'], form);
                        kart.setAttribute('id', 'kart');
                       

                        let label1 = create('label', '', form);
                        label1.setAttribute('for', 'tarix');
                        label1.innerText = 'Kartinizin bitme tarixini daxil edin';

                        let tarix = create('input', ['form-control'], form);
                        tarix.setAttribute('id', 'tarix');

                        let label2 = create('label', '', form);
                        label2.setAttribute('for', 'cvv');
                        label2.innerText = '3 reqemli kodu daxil edin';

                        let cvv = create('input', ['form-control'], form);
                        cvv.setAttribute('id', 'cvv');

                        let pay = create('button', ['btn', 'btn-success'], form);
                        pay.innerText = 'Ode';
                        pay.addEventListener('click', function () {
                        })
                    })) { }


                    if (btn18.addEventListener('click', function () {
                        p.innerText ='Qalan meblegin 18 aya olan kredit faizi:'+" "+ Math.round((a-b)+(a - b) * 14 / 18);

                        let form = create('form', ['pt-5', 'col-3'], con);

                        let label = create('label', '', form);
                        label.setAttribute('for', 'kart');
                        label.innerText = 'Kartinizin wifresini daxil edin';

                        let kart = create('input', ['form-control'], form);
                        kart.setAttribute('id', 'kart');
                        // kart.setAttribute('onkeypress')

                        let label1 = create('label', '', form);
                        label1.setAttribute('for', 'tarix');
                        label1.innerText = 'Kartinizin bitme tarixini daxil edin';

                        let tarix = create('input', ['form-control'], form);
                        tarix.setAttribute('id', 'tarix');

                        let label2 = create('label', '', form);
                        label2.setAttribute('for', 'cvv');
                        label2.innerText = '3 reqemli kodu daxil edin';

                        let cvv = create('input', ['form-control'], form);
                        cvv.setAttribute('id', 'cvv');

                        let pay = create('button', ['btn', 'btn-success'], form);
                        pay.innerText = 'Ode';
                        pay.addEventListener('click', function () {
                        })
                    })) { }
                }
                else {
                    alert('Bu meblegle mawin kredite salinmir :(')
                }
            })