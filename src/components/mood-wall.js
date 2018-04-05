import React, { Component } from 'react';
require('../styles/moodWall.css') ;

var goodMoodWords = ['开心', '喜悦', '狂喜', '尽情', '快乐', '愉悦', '畅快',
 '欣喜', '幸福', '得意', '痛快', '满足', '欢乐', '快活', '陶醉', '甜美', '微笑',
 '兴奋', '自豪', '欣慰', '高兴', '满意', '惊喜']

var badMoodWords = ['心烦', '失落', '伤感', '忧伤', '委屈', '绝望', '哭泣', '伤心', '痛苦', '悲伤',
 '悲泣', '忧伤', '悲痛', '沮丧', '气馁', '郁闷', '烦躁', '低沉', '消沉', '悲观', '消极', '酸涩',
 '落魄', '绝望', '呆滞','不开心', '不喜悦', '不狂喜', '不尽情', '不快乐', '不愉悦', '不畅快',
 '不欣喜', '不幸福', '不得意', '不痛快', '不满足', '不欢乐', '不快活', '不陶醉', '不甜美', '不微笑',
 '不兴奋', '不自豪', '不欣慰', '不高兴', '不满意']

var normalMoodWords = ['无聊', '平淡', '一般', '平常', '普通', '不心烦']

var moodWords = ['开心', '喜悦', '狂喜', '尽情', '快乐', '愉悦', '畅快',
 '欣喜', '幸福', '得意', '痛快', '满足', '欢乐', '快活', '陶醉', '甜美', '微笑',
 '兴奋', '自豪', '欣慰', '高兴', '满意','心烦', '失落', '伤感', '忧伤', '委屈', '绝望', '哭泣', '伤心', '痛苦', '悲伤',
 '悲泣', '忧伤', '悲痛', '沮丧', '气馁', '郁闷', '烦躁', '低沉', '消沉', '悲观', '消极', '酸涩',
 '落魄', '绝望', '呆滞','不开心', '不喜悦', '不狂喜', '不尽情', '不快乐', '不愉悦', '不畅快',
 '不欣喜', '不幸福', '不得意', '不痛快', '不满足', '不欢乐', '不快活', '不陶醉', '不甜美', '不微笑',
 '不兴奋', '不自豪', '不欣慰', '不高兴', '不满意','无聊', '平淡', '一般', '平常', '普通', '不心烦']

function analysisGoodMood(str){
    let counter = 0
    let goodMood = ''
    for(let i = 0; i < goodMoodWords.length; i ++){
        if(str.indexOf(goodMoodWords[i]) >= 0){
            if(str.substr(str.indexOf(goodMoodWords[i]) - 1, 1) != '不'){
                if(counter != 0)
                    goodMood += '、'
                goodMood += goodMoodWords[i]
                counter ++
            }
        }
    }
    return goodMood
}

function analysisBadMood(str){
    let counter = 0
    let badMood = ''
    for(let i = 0; i < badMoodWords.length; i ++){
        if(str.indexOf(badMoodWords[i]) >= 0){
            if(counter != 0)
                badMood += '、'
            badMood += badMoodWords[i]
            counter ++
        }
    }
    return badMood
}

function analysisNormalMood(str){
    let counter = 0
    var normalMood = ''
    for(let i = 0; i < normalMoodWords.length; i ++){
        if(str.indexOf(normalMoodWords[i]) >= 0){
            if(counter != 0)
                normalMood += '、'
            normalMood += normalMoodWords[i]
            counter ++
        }
    }
    return normalMood
}

function MoodBoxUIChange(props){
    const sentence = '我今天早上心情非常不高兴,很痛苦,平淡，惊喜, 喜悦'
    var good = analysisGoodMood(sentence)
    var bad = analysisBadMood(sentence)
    var normal = analysisNormalMood(sentence)
    var goodMoodBox, badMoodBox, normalMoodBox
    if(good != ''){
        goodMoodBox =
        <li className="mood-box good-mood-box">
            <div className='mood-text-container'>
                <h1>{good}</h1>
                <p>好心情是上天的馈赠，和朋友分享喜悦能获得双倍的快乐哟。</p>
            </div>
            <img src='../images/good-mood-face.png' className='face-images'/>
        </li>
    }
    if(bad != ''){
        badMoodBox =
        <li className="mood-box bad-mood-box">
            <div className='mood-text-container'>
                <h1>{bad}</h1>
                <p>人生总是起起落落，但到了最低点总会回升，再难捱的日子也会有变好的一天。</p>
            </div>
            <img src='../images/bad-mood-face.png' className='face-images'/>
        </li>
    }
    if(normal != ''){
        normalMoodBox =
        <li className="mood-box normal-mood-box">
            <div className='mood-text-container'>
                <h1>{normal}</h1>
                <p>今天心情平平，不过不要紧，明天也许就是你的幸运日。</p>
            </div>
            <img src='../images/normal-mood-face.png' className='face-images'/>
        </li>
    }
    return(
        <ul>{goodMoodBox}{normalMoodBox}{badMoodBox}</ul>
    )
}



class MoodWall extends Component {
    render(){
        return(
            <div className="mood-wall" id="mood-wall">
                <h1>本日心情</h1>
                <MoodBoxUIChange />
            </div>
        )
    }
}
export default MoodWall;

