import React, { Component } from 'react'
import { Container , Row , Col , Form , Button } from 'react-bootstrap'; 
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import ImageUploader from 'react-images-upload';


function uploadImageCallBack(file) {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }


export default class AddBlogPost extends Component {
  constructor(props) {
    super(props);
    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
      this.state = { pictures: [] };
      this.onDrop = this.onDrop.bind(this);
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}

  render() {
    const { editorState } = this.state;
    return (
      <div className="blogPost bp">
         <Container>
             <Row>
                 <Col lg={12}>
                    
                   <Form>

                        <div class="PostCatagory">
                            <h3>Add Title</h3> 
                        </div>
                        <Form.Group controlId="formBasicEmail"> 
                            <Form.Control type="email" placeholder=" Add Title " /> 
                        </Form.Group>

                        <div class="PostCatagory">
                            <h3>Add Detials</h3> 
                        </div>

                        <Editor
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            toolbar={{
                            inline: { inDropdown: true },
                            list: { inDropdown: true },
                            textAlign: { inDropdown: true },
                            link: { inDropdown: true },
                            history: { inDropdown: true },
                            image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                            }}
                        />

                        <Row className="selectCatagory">
                            <Col lg={3}>
                                <div class="PostCatagory">
                                    <h3>Catagories</h3> 
                                </div>
                                <Form.Group controlId="formBasicEmail"> 
                                    <Form.Control type="email" placeholder=" Add Catagories " /> 
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <div class="PostCatagory">
                                    <h3>Tag</h3> 
                                </div>
                                <Form.Group controlId="formBasicEmail"> 
                                    <Form.Control type="email" placeholder=" Add Tag " /> 
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <div class="PostCatagory">
                                    <h3>Latest Post</h3> 
                                </div>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Add Latest Post" />
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <div class="PostCatagory">
                                    <h3>Slider Post</h3> 
                                </div>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Add Slider Post" />
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <br/>
                        <div class="PostCatagory">
                            <h3>Featured Image</h3> 
                        </div>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Set featured image'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />              
                    
                        <br/>
                        <Button variant="primary" type="submit">
                            Publish
                        </Button>

                    </Form>

                     
                 </Col>
             </Row>
         </Container>
      </div>
    );
  }
}