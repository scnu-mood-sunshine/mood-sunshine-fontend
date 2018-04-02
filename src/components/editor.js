import React from 'react'
import BraftEditor from 'braft-editor'
import NavigationBar from './navigation-bar'
import 'braft-editor/dist/braft.css'
// import axios from 'axios'
require('../styles/editor.css')

/**
 * 根据content提取文章简介
 * @param {Object} content //文章内容对象
 */
function getIntroduction (content) {
  let introduction = ''
  for (let raw of content) {
    introduction += raw.text
    if (introduction.length > 150) {
      break
    }
  }

  return introduction.slice(0, 150)
}

class Editor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      htmlContent: ''
    }
  }

  uploadFn = (param) => {
    if (param.file.size > 5192000) {
      param.error({
        msg: '图片太大了噢，给个小于5M的图片好吧'
      })
    }
    const formData = new FormData()
    formData.append('file', param.file)
    formData.append('type', param.file.type)
  }

  render() {

    const editorProps = {
      height: 500,
      placeholder: 'Hello World!',
      initialContent: '',
      onHTMLChange: this.handleHTMLChange,
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
      viewWrapper: '.demo',
      media: {
        allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
        image: true, // 开启图片插入功能
        video: false, // 关闭视频插入功能
        audio: false, // 关闭音频插入功能
        validateFn: this.validateFn, // 指定本地校验函数
        uploadFn: this.uploadFn, // 指定上传函数
        removeConfirmFn: null, // 指定删除前的确认函数，说明见下文
        onRemove: null, // 指定媒体库文件被删除时的回调，参数为被删除的媒体文件列表(数组)
        onChange: null, // 指定媒体库文件列表发生变化时的回调，参数为媒体库文件列表(数组)
        onInsert: null // 指定从媒体库插入文件到编辑器时的回调，参数为被插入的媒体文件列表(数组)
      },
      // 增加自定义预览按钮
      extendControls: [
        {
          type: 'split'
        },
        {
          type: 'button',
          text: '预览',
          className: 'preview-button',
          onClick: () => {
            window.open().document.write(this.state.htmlContent)
          }
        }
      ]
    }

    return (
      <div>
        <NavigationBar />
        <div className="editor-container">
          <input type="text" placeholder="文章标题..." className="title-input"/>
          <div className="editor-wrap" id="editor-root">
            <div className="demo" width="888px">
              <BraftEditor {...editorProps} />
            </div>
          </div>
        </div>
      </div>
    )

  }

  handleHTMLChange = (htmlContent) => {
    this.setState({ htmlContent })
  }

}

export default Editor
