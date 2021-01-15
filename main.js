
const vm = new Vue({			
    el: '#app',			
    data: {		
        head:{// 상위 헤더메뉴
            text : 'YouTube',
            number: 2, 
        },
        video:{// 비디오
            play: 'video/IMG_0788.MOV',
        },
        hamburger:{// 햄버거 메뉴
            False: false,
        },
        title:{// 비디오 제목
            False: false,
            text: '승모씨와 임모씨가 술먹고?? 화제의 인물! 저기 누어있는 사람은 누구?!! 올해 주모상, 8전트 월드베스트 인간 제조기',     
        },
        gudok:{// 구독버튼
            True:true,  
            Gray:'gray', 
            Red:'red', 
        },
        autoPlay:{// 자동재생 버튼
            classObject: {
                'last_btn' : true,
                rightMove: false,
            },
        },
        playlist:[// 비디오 리스트
            {imge: 'img/1.JPG', title:'[아시아최초] 눈싸움 기계 이것만 있으면 1인자', text:'최고다윽박EUGBAK', count:'조회수 10.3만회' },
            {imge: 'img/2.JPG', title:'쇼미더머니 파이널 무대', text:'Ment Tv', count:'조회수 321.5만회' },
            {imge: 'img/3.JPG', title:'대한민국 최초 푸스카스!!!!', text:'축박공', count:'조회수 13.9만회' },
            {imge: 'img/4.JPG', title:'죄송합니다 여러분', text:'보겸보겸', count:'조회수 3.9만회' },
            {imge: 'img/5.JPG', title:'아스날 VS 애버튼 14R', text:'SPOTV', count:'조회수 50.1만회' },
            {imge: 'img/6.JPG', title:'장삐쭈 단편', text:'장삐쭈', count:'조회수 123.3만회' },
        ],
        good:{ // 미완료
            count:0,
            color:'gray'
        },
        bad:{ // 미완료
            count:0,
            color:'gray'
        },
    },
    methods : {
            serch(){  // 검색이미지 클릭시
                this.head.number=1;
            },
            back(){  // 뒤로가기이미지 클릭시
                this.head.number=2; 
            },
            hamburgerOpen(){ // 햄버거 버튼 클릭시
                this.hamburger.False =true;
            },
            hamburgerClose(){ // 햄버거 메뉴 '취소' 클릭시
                this.hamburger.False =false;
            },
            titleClass(){ // 제목과 화살표 버튼 클릭시
                this.title.False = !this.title.False;   
            },
            gudokButoon(){ // 구독할시
                this.gudok.True=!this.gudok.True; // True 변경으로 '구독중' 노출
            },
            gudokClose(){ // 구독을 취소할시                                  
                if (confirm("구독을 취소 하시겠습니까?")==true) {//팝업창으로 true와 false을 부여
                    this.gudok.True = true;                       
                } else {
                    this.gudok.True = false;     
                }
            },
            player (){ // 자동재생 버튼클릭할시
                this.autoPlay.classObject.rightMove=!this.autoPlay.classObject.rightMove;
            },
            goodButton(){
                this.good.count++;
                this.good.color='blue';
            },
            badButton(){
                this.bad.count++;
                this.bad.color='blue';
            },
        },
})