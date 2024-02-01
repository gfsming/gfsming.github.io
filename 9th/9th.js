const historyLine = document.getElementById("history-line-bg")
const historyContent = document.getElementById("history-content")
const title = document.getElementById("history-title-span")

let nowTop = 50

const titleTexts = {
    50: "투명한 유리구슬처럼 보이지만\n그렇게 쉽게 깨지진 않을거야",
    180: "널 향한 설레임을\n오늘부터 우리는",
    310: "시간을 달려서\n어른이 될 수만 있다면",
    440: "새롭게 시작해 볼래\n너 그리고 나",
    570: "탕탕탕 FINGERTIP\n네 맘을 겨눌게",
    700: "어디서든 들려와 귀를 기울이면\n나를 향한 믿음에 귀를 기울이면",
    830: "찬란하게 빛나던 시간이었다고\n맑은 여름비처럼 고마웠었다고",
    960: "떨려오는 별빛 반짝이는데\n넌 어디를 보고 있는지",
    1090: "여름여름해\nSunny Summer",
    1220: "저기 해야 해야\n너를 봐야 봐야",
    1350: "눈부신 달빛 아래\n열대야 같은 사랑을 하고 있어",
    1480: "안 돼 아직 모든 게 너로 가득해\n아직 어디도 못 가겠어",
    1610: "뜨거운 춤을 춘다\n내 안에 별이 뜬다",
    1740: "MAGO MAGO 심판해 봐 지금 날\n흔들리지 않을 테니"
}

const titleImgs = {
    50: "https://image.melon.co.kr/cm/album/images/022/99/776/2299776_org.jpg",
    180: "https://image.melon.co.kr/cm/album/images/023/30/981/2330981_org.jpg",
    310: "https://image.bugsm.co.kr/album/images/original/200188/20018855.jpg",
    440: "https://image.melon.co.kr/cm/album/images/026/96/751/2696751_org.jpg",
    570: "https://cdnimg.melon.co.kr/cm/album/images/100/43/312/10043312_org.jpg",
    700: "https://i.namu.wiki/i/WnkncuP3e_N9QckVBRS7vl0eTcdzQkTP6HEtQNeO3Y0Ta_HpmVpRWt26-MwTiobGhQdlhRWs12rB7cP_cA3QktRfqoxP8PMrtrb0iqaA6Uy2lflGg2dAXO-tU_DsVeH-2SCWVRxT31DVg8y3J7Ry_w.webp",
    830: "https://i.namu.wiki/i/yOJVxj4uNNYbTDxhmwFFA3M0k1JWBBeyz-Vpyn_ebbjZ6LyXUZ4JU2QKB-MMs2mHopUM7ia3FvMIM3YvHEhIOCZJaoelnEezeI41IV5RlSJZLoSBXugB1vuWAikZ7uGNJ-T8SxxJbFYlM97IFJYutg.webp",
    960: "https://i.namu.wiki/i/GuM0pKoKmpbbrN_CrTEIrDRyEuM-1fPlVL5WAcz0-kxwC78Kx0uGWEQbJRKmBjWXnSscMQ2bkmUCECSQtYib-aT4iRleOzSq6XpKRmI_83NEZYjlS3aOjGPDELbXx3ZwPvuhjW12RTsJbmlDTLuz-g.webp",
    1090: "https://i.namu.wiki/i/MpIhyZXkypctnh0V9VC7pV2CZucKASLjmFSxWKhKgisOu0Y1dlgsuSTWkLN9kbQ1ZkjYWg31XvOHihomoH-ErNOXzeEowczJ96lyzJ8R-csq-F5IXZwjpgsDBETH5l_ul2rAri4-W7-_kt0Hc6grmw.webp",
    1220: "https://i.namu.wiki/i/VfGAnM_LDpgusYwbVkZqC90EFHK_zu8zwbas4cZslTu0LC5lgt5uiCxfSmpTHm2EuVQLNMfaCcd9OgzAXBkNgEOW9Emh4gjCKFz6uzz4MW39_nVWoe62LkN4Lc60i8u0FFn3XmtkQBESphmUG0ijaA.webp",
    1350: "https://i.namu.wiki/i/DP_kWdPP_T-Iu5ahSZTbNIy_SuAtCynwSlwU3pjjH6XiCQ2ve7Ml4-Ti4GzWbbcIJwprscH2M5BNEyy7bdMV54Vk2FjqNUZLVWW_z6HcaXqWGHLuRcc4bIU6l5B4WovSwdaGop7eF2ttVNGTMPtSvA.webp",
    1480: "https://i.namu.wiki/i/2aRFuXBuyjx4hUFoRXWjmi1HYq5rOe35-9CtTetCSD7tTiMXBe5pW8-6Xjw01MLUd5eAxsRBbRVPD5AaB_QV0Jv3VC4bMrpI1XgiMiXgnIQV2JwhuP-7cEnJG9TBcmUk-iTwRi9V2okG0HgLcWfBAA.webp",
    1610: "https://i.namu.wiki/i/je5LUytP51Zp4jZwORNLVkE0lkmTN5Lc8zfMIo4f6r06mb37DIxUfKgTVWg0iDshrDUMtNXM1ntomUuolGpkjCWiaSTGFy3tfZxJQ_y_z-X1UFcGP-YFM0kD8QElIgewPhbzvJPOwa_UQvscQt90QA.webp",
    1740: "https://i.namu.wiki/i/jzKoK_LUq76nqinh7sU23jm7Ku_swEyE0gg8pYvpthPddHDPvSQuNvw_HI07HkOaxH7RjN1-ae8VZu0UM85qL81mifYvlSmiJ8P6tgNOYPtbxuhR6UNXK-FybAH8dRd83pX-twMr7OYaXtnt3AnDBQ.webp"
}

/** 뮤비 링크는 1theK 기준으로 작성 */
const titleLinks = {
    50: {mv:"https://www.youtube.com/watch?v=GU7icQFVzHo",music:"https://www.youtube.com/watch?v=rTasb6w_RGc"},
    180: {mv:"https://www.youtube.com/watch?v=bjRMhQpOYAM",music:"https://www.youtube.com/watch?v=m-zUlgJxheU"},
    310: {mv:"https://www.youtube.com/watch?v=0VKcLPdY9lI",music:"https://www.youtube.com/watch?v=xeGlv2QeFmA"},
    440: {mv:"https://www.youtube.com/watch?v=Se8bbsUFjC8",music:"https://www.youtube.com/watch?v=wwK4zapdzi8"},
    570: {mv:"https://www.youtube.com/watch?v=i1n_1jrUEjU",music:"https://www.youtube.com/watch?v=lN54WC4SKC0"},
    700: {mv:"https://youtu.be/lnXXfYA91Y8",music:"https://www.youtube.com/watch?v=oYJ5AfJurNU"},
    830: {mv:"https://youtu.be/ZsYwEV_ge4Y",music:"https://www.youtube.com/watch?v=tqQ2wpWjYIw"},
    960: {mv:"https://youtu.be/_XyBa8QsVQU",music:"https://www.youtube.com/watch?v=VxOe-eXhhCc"},
    1090: {mv:"https://youtu.be/9iPLjmz3_U4",music:"https://www.youtube.com/watch?v=KYSiCe09FOE"},
    1220: {mv:"https://youtu.be/iciFwCnsyY4",music:"https://www.youtube.com/watch?v=dkE_9tB0KEc"},
    1350: {mv:"https://youtu.be/Zll7O1v63aY",music:"https://www.youtube.com/watch?v=3Tc6d9hD5pg"},
    1480: {mv:"https://www.youtube.com/watch?v=kx5TWKPE5sU",music:"https://www.youtube.com/watch?v=ygbyUS0PvFA"},
    1610: {mv:"https://www.youtube.com/watch?v=XQSse3b2ge4",music:"https://www.youtube.com/watch?v=xY_x6OTb0Jc"},
    1740: {mv:"https://www.youtube.com/watch?v=LmBYPXGqtss",music:"https://www.youtube.com/watch?v=sinPks6z2ng"}
}

/**
 * history-line-bg의 top 속성을 조절(button의 onclick 속성이 호출함)
 * @param {number} top 
 */
function changeLineTop(top) {
    const height = historyLine.parentElement.clientHeight
    nowTop = top
    historyLine.style.top = `-${Math.max(top - height / 2 + 40,0)}px`
    historyContent.style.background = `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("${titleImgs[nowTop]}")`
    historyContent.style.backgroundPosition = `center`
    historyContent.style.backgroundSize = `cover`
    title.innerText = titleTexts[nowTop]
}

/** 뮤비 창 오픈 */
function openMV() {
    window.open(titleLinks[nowTop].mv,"_blank")
}

/** 유튜브 음원 창 오픈 */
function openMusic() {
    window.open(titleLinks[nowTop].music,"_blank")
}

/** 대표 가사 클릭 시 이스터에그 */
function titleAlert() {
    if (nowTop == 180) alert("오늘버터 뿌리는~")
    if (nowTop == 570) alert("탕탕탕 북거팁 동무를 겨눌게~")
}

// 데뷔 9주년의 숫자 클릭하면 숫자 올라가는 이스터에그

const headerNumber = document.getElementById("header-number")
const headerYear = document.getElementById("header-year")

let number = 9

function countUp() {
    number++

    if (number < 20) {
        headerNumber.innerText = String(number)
        headerYear.innerText = String(number + 2015)
    }
    else {
        alert(`여자친구 데뷔 20주년까지 함께 하고싶은 당신!\n하지만 지금은 데뷔 9주년이랍니다?`)
        number = 9
        headerNumber.innerText = String(number)
        headerYear.innerText = String(number + 2015)
    }
}

function ios(obj) {
    var ua = navigator.userAgent;
    
    var src = obj.getAttribute('href');
    if (obj.id.toString().substring(0,5)=='genie')	{
        if (ua.indexOf('iPhone') > 0 || ua.indexOf('Macintosh') > 0 || ua.indexOf('iPad') > 0) {
            obj.setAttribute('href', src.replace('cromegenie://scan','KTolleh00167://landing'));
        }
        else if (isDesktopOS()) {
            window.open('https://www.genie.co.kr/player/shareProcessV2?xgnm='+src.substring(src.indexOf('target=')+7));
        }
    }
    else {
        if (ua.indexOf('iPhone') > 0) {
            obj.setAttribute('href', src.replace('melonapp','meloniphone'));
        }
        else if (ua.indexOf('Macintosh') > 0 || ua.indexOf('iPad') > 0) {
            obj.setAttribute('href', src.replace('melonapp','melonipad'));
        }
        else if (isDesktopOS()) {
            if (src.indexOf('elonapp') > 0) {
                obj.setAttribute('href', src.replace('ctype=1&menuid=0&cid=','cType=1&cList='));
            }
            else if (src.indexOf('ugs3:') > 0) {
                window.open('https://music.bugs.co.kr/newPlayer?trackId='+src.substring(src.indexOf('track_ids=')+10).replace(/\|/gi,','));
            }
        }
    }
}