import React, { Component } from 'react';
require('../styles/article-reading-page.css')
import MoodWall from './mood-wall.js'
import axios from '../bin/axios'
import { withCookies } from 'react-cookie'
import NavigationBar from './navigation-bar'

const editPart = () => {
    return (
        <div className='article-edit-part'>
            <button>编辑</button>
            <button>隐藏</button>
            <button>删除</button>
        </div>
    )
}

class ArticleReading extends Component{
    constructor (props) {
        super(props);
        this.state = {
            title: '如何防止自己被人肉搜索到？',
            text:  `作者：神马疯了
                这是我的反人肉绝招，一般来说，对于单打独斗的人肉侠，如果不查ip和动用国家机器没办法能破得了我。知乎上我留得信息太多了，非常好肉，就不说了。以前我混贴吧。因为我年轻时经常发表一些爆炸性言论，非常害怕被人人肉暴打。于是我。。。有意无意的开始泄露一些私人信息。对，你没看错，我故意泄露一些。1.我虽然是在国内上某末流985的大学，但是我贴吧没有关注该大学。而是改道关注了一个某美国大学的贴吧，平均每年去发一个帖子，我记得第一年发的是“XX级新生报到，求同行”；第二年发的是“求XX专业同学群”；第三年“final今年真tm的难”；第四年：“请问如何摇H1B”。其实我连H1B是什么都不知道。。。如果你搜我的贴吧ID，你经过精彩的推理，就会发现我神奇地在美国，这一步基本上就杜绝了一切上门暴打。2.然后我又买了一个太阳的QQ号（超便宜，烂大街），然后经常在贴吧留这个QQ的qq邮箱求资源。只要你在搜我的贴吧ID，那么这个QQ号一定会蹦到你眼前，然而我这个买的QQ号我从来不用，只是把资料改成了所在地美国 巴拉巴拉之类的。你一看double check了，资料也是美国，也不是一级小号，你觉得发现我QQ号本尊了。。。3.精髓来了，我这个QQ的资料卡上还写上我的手机号。如果你从贴吧开始人肉我，顺藤摸瓜，摸到了我的“QQ号”，正在窃喜的时候。发现我“QQ号”资料卡居然有手机号，我估计你已经开始欢呼雀跃了，因为你马上就成功了。但是对不起，我这里的手机号也不是我的。是我住某宾馆时，从门缝塞进来的小卡片，上面大概写着“X小姐，一夜X”这类的话，我写的手机号就是包小姐本人的。
                这是我的反人肉绝招，一般来说，对于单打独斗的人肉侠，如果不查ip和动用国家机器没办法能破得了我。知乎上我留得信息太多了，非常好肉，就不说了。以前我混贴吧。因为我年轻时经常发表一些爆炸性言论，非常害怕被人人肉暴打。于是我。。。有意无意的开始泄露一些私人信息。对，你没看错，我故意泄露一些。1.我虽然是在国内上某末流985的大学，但是我贴吧没有关注该大学。而是改道关注了一个某美国大学的贴吧，平均每年去发一个帖子，我记得第一年发的是“XX级新生报到，求同行”；第二年发的是“求XX专业同学群”；第三年“final今年真tm的难”；第四年：“请问如何摇H1B”。其实我连H1B是什么都不知道。。。如果你搜我的贴吧ID，你经过精彩的推理，就会发现我神奇地在美国，这一步基本上就杜绝了一切上门暴打。2.然后我又买了一个太阳的QQ号（超便宜，烂大街），然后经常在贴吧留这个QQ的qq邮箱求资源。只要你在搜我的贴吧ID，那么这个QQ号一定会蹦到你眼前，然而我这个买的QQ号我从来不用，只是把资料改成了所在地美国 巴拉巴拉之类的。你一看double check了，资料也是美国，也不是一级小号，你觉得发现我QQ号本尊了。。。3.精髓来了，我这个QQ的资料卡上还写上我的手机号。如果你从贴吧开始人肉我，顺藤摸瓜，摸到了我的“QQ号”，正在窃喜的时候。发现我“QQ号”资料卡居然有手机号，我估计你已经开始欢呼雀跃了，因为你马上就成功了。但是对不起，我这里的手机号也不是我的。是我住某宾馆时，从门缝塞进来的小卡片，上面大概写着“X小姐，一夜X”这类的话，我写的手机号就是包小姐本人的。`,
            author: {
                id: 'no id',
                avatar: 'http://oqzgtjqen.bkt.clouddn.com/1066973925.jpg',
                name: 'Rfon',
                desc: 'fon',
                articleNum: 11,
                moodNum: 0,
                attention: 1
            },
            goodDivWidth : 30,
            normalDivWidth : 11,
            badDivWidth : 203
        };
    }
    componentDidMount() {
        axios.get('/api/v1/posts/' + this.props.match.params.id)
            .then(res => {
                const data = res.data.data
                this.setState({
                    title: data.title,
                    text: data.content,
                    author: {
                        ...this.state.author, id: data.owner.user_id
                    }
                })
            })
    }

    render() {
        const { cookies } = this.props
        const loginUser = cookies.get('mood_sunshine_user_imformation')
        let EditPart = null
        if (this.state.author.id === loginUser.user_id) {
            EditPart = editPart()
        }
        return(
            <div>
                <NavigationBar />
                <div className="contain-box">
                    <div>
                        <div className='article'>
                            <p className='title'>{this.state.title}</p>
                            <div className='reading-text' dangerouslySetInnerHTML={{__html: this.state.text}}></div>
                        </div>
                        <div className='imformation-container'>
                            <div className='author-imformation-container'>
                                <div className='little-title'>关于作者</div>
                                <hr className='long-hr'></hr>
                                <div className='author-imformation-box'>
                                    <div className='author-headpicture'>
                                        <img src={this.state.author.avatar}/>
                                    </div>
                                    <div className='author-name-box'>
                                        <a className='user-link'>{this.state.author.name}</a>
                                        <div className='user-description'>{this.state.author.desc}</div>
                                    </div>
                                    <button className='follow-button' type='button'></button>
                                </div>
                                <hr className='short-hr'></hr>
                                <div className='author-article-mood-followers'>
                                    <div className='article-number-box'>
                                        <div className='article-text'>文章</div>
                                        <div className='article-number'>{this.state.author.articleNum}</div>
                                    </div>
                                    <div className='article-number-box'>
                                        <div className='article-text'>心情数</div>
                                        <div className='article-number'>{this.state.author.moodNum}</div>
                                    </div>
                                    <div className='article-number-box'>
                                        <div className='article-text'>关注</div>
                                        <div className='article-number'>{this.state.author.attention}</div>
                                    </div>
                                </div>
                            </div>
                                <div className='article-mood-wall'>
                                    <p>文章心情指数</p>
                                    <div className={'article-progress-container'}>
                                        <div className='article-mood-record-progress article-good-mood' style={{width:this.state.goodDivWidth}}></div>
                                        <p style={{color: '#ff6969'}}>{this.state.goodDivWidth}</p>
                                    </div>
                                    <div className='article-progress-container'>
                                        <div className='article-mood-record-progress article-normal-mood' style={{width:this.state.normalDivWidth}}></div>
                                        <p style={{color: '#bfb2e2'}}>{this.state.normalDivWidth}</p>
                                    </div>
                                    <div className='article-progress-container'>
                                        <div className='article-mood-record-progress article-bad-mood' style={{width:this.state.badDivWidth}}></div>
                                        <p style={{color: '#90919a'}}>{this.state.badDivWidth}</p>
                                    </div>
                                </div>
                                {EditPart}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ArticleReading.defaultProps = {};

ArticleReading.propTypes = {};

export default withCookies(ArticleReading)