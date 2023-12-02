// const btn1 = $('#btn')
// const btn2 = $('.btn2')
// const header= $('header')
// const X = $('#X')
// btn1.click(function(){
//     btn2.fadeIn();
//     X.fadeIn()
//     btn1.fadeOut()
    

// })
// X.click(function(){
//     btn2.fadeOut();
//     btn1.fadeIn()
// })
// const home=$('#home1')
// home.click(function(){
//     btn2.fadeOut()
//     btn1.fadeIn()
// })
const navmenu = document.querySelector('#navmenu')
const hbaktif = document.querySelector('#hb');
hbaktif.addEventListener('click',function(){
    hbaktif.classList.toggle('hbaktif')
    navmenu.classList.toggle('hidden')
})
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixnav= header.offsetTop;
    if(window.pageYOffset>fixnav){
        header.classList.add('navfixed')
    } 
    else{
header.classList.remove('navfixed')
    }
    }
// star mi
    const btnMi = $('#btn-mi')
    const closeMi =$('#closeMi')
    const modalMi = $('#ModalBoxMi')
    btnMi.click(function(){
        modalMi.show(1000);

    })
    closeMi.click(function(){
        modalMi.fadeOut(700);
    })
    const btn1=$('#btn');
const close=$('#close');
const closeb=$('#closeb')
const modalBox=$('#modal-box');
const boxModal=$('#box-modal');
const bg=$('#bg')
btn1.click(function(){
    bg.show(1991)
    modalBox.fadeIn(1990)
})
closeb.click(function(){
    modalBox.hide(3000)
    bg.hide(2999)
})
// end modal mi

// star Mts Modal
const btnmts=$('#btnMts')
const bgnmts=$('#bgmts')
const mts1=$('#Mts1')
const MtsClose=$('#MtsClose')
const modalMts=$('#modalmts')
const boxmts=$('#boxmts')
btnmts.click(function(){
bgnmts.show(1400)
modalMts.fadeIn(1600)
})
MtsClose.click(function(){
    bgnmts.hide(2999)
    modalMts.hide(3000)
})

// End Mts Modal

// star Smk
    const btnsmk=$('#btnSmk')
    const bgsmk=$('#bgSmk')
    const modalsmk=$('#modalsmk')
    const boxsmk=$('#boxSmk')
    const closeSmk=$('#closesmk')
    btnsmk.click(function(){
        bgsmk.show(2000)
        modalsmk.fadeIn(2400)
    })
    closeSmk.click(function(){
        bgsmk.hide(2000)
        modalsmk.fadeOut(3000)
    })

    
// End Smk
// Star Cbi
const btnCbi=$('#btnCbi')
const bgCbi=$('#bgCbi')
const modalCbi=$('#modalCbi')
const closeCbi=$('#closeCbi')
btnCbi.click(function(){
    bgCbi.show(2000)
    modalCbi.fadeIn(2300)
})
closeCbi.click(function(){
    bgCbi.hide(2000)
    modalCbi.fadeOut(1800)
})
// End Cbi
// Star Galery
    
const mts = $('#mts')
const smk = $('#smk')
const cbi = $('#cbi')
const all = $('#all')
const sertifikat = $('#sertifikat')

const cmts = $('.gmmts')
const csmk = $('.gmsmk')
const ccbi =$('.gmcbi')
const gmser =$('.gmser')
 
mts.click(function(){
    cmts.show()
    csmk.hide()
    ccbi.hide()
    gmser.hide()
    mts.addClass('aktif')
    all.removeClass('aktif')
    cbi.removeClass('aktif')
    smk.removeClass('aktif')
    sertifikat.removeClass('aktif')
})
smk.click(function(){
    cmts.hide()
    csmk.show()
    ccbi.hide()
    gmser.hide()
    smk.addClass('aktif')
    mts.removeClass('aktif')
    all.removeClass('aktif')
    cbi.removeClass('aktif')
    sertifikat.removeClass('aktif')
})
cbi.click(function(){
    cmts.hide()
    csmk.hide()
    gmser.show()
    ccbi.show()
    cbi.addClass('aktif')
    mts.removeClass('aktif')
    smk.removeClass('aktif')
    all.removeClass('aktif')
    sertifikat.removeClass('aktif')
})
all.click(function(){
    cmts.show()
    csmk.show()
    ccbi.show()
    gmser.show()
    all.addClass('aktif')
    mts.removeClass('aktif')
    smk.removeClass('aktif')
    cbi.removeClass('aktif')
    sertifikat.removeClass('aktif')
    
})

// End Galery
// smk
const ssemua =$('#ssemua')
const ssmk =$('#ssmk')
const sersmk =$('#sersmk')
const gsmk =$('.gsmk')
const gser =$('.gser')

ssemua.click(function(){
    gsmk.show()
    gser.show()
})
ssmk.click(function(){
    gsmk.show()
    gser.hide()
})
sersmk.click(function(){
    gsmk.hide()
    gser.show()
})
// endsmk
// cbi
const semuacbi =$('#semuacbi')
const fotocbi =$('#fotocbi')
const sercbi =$('#sercbi')

const sfoto =$('.scbi')
const Ssertifikat =$('.cbisertifikat')
semuacbi.click(function(){
    Ssertifikat.show()
    fotocbi.show()
    semuacbi.addClass('aktif')
    fotocbi.removeClass('aktif')
    sercbi.removeClass('aktif')
}) 
fotocbi.click(function(){
    sfoto.show()
    Ssertifikat.hide()
    semuacbi.removeClass('aktif')
    fotocbi.addClass('aktif')
    sercbi.removeClass('aktif')
})
sercbi.click(function(){
    sfoto.hide()
    Ssertifikat.show()
    semuacbi.removeClass('aktif')
    fotocbi.removeClass('aktif')
    sercbi.addClass('aktif')
})
// endscbi