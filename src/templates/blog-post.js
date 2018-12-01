import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ColoredHeader from '../components/ColoredHeader'
import styled from 'styled-components'

const CtaBlog = styled.div`
margin: 6rem;
display: grid;
justify-content: center;
`

const SpecialBtn = styled.a`
  text-align: center;
  cursor: pointer;
  background: linear-gradient(
    125deg,
    rgba(45, 55, 105, 1),
    rgba(234, 80, 108, 1)
  );
  border: 1px solid hsl(0, 0%, 100%);
  border-radius: 97px;
  font-weight: 600;
  font-size: 21px;
  line-height: 64px;
  text-transform: uppercase;
  color: white;
  display: block;
  width: 250px;
  height: 64px;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }
`;


class BlogPost extends Component {

    render() {

        const {
            title,
            content
        } = this.props.data.contentfulBlog
        return (
            <section>
                <ColoredHeader />

                <div className="Article">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />

                    <CtaBlog>
                        <SpecialBtn href="/cotiza">Cotiza Hoy</SpecialBtn>

                    </CtaBlog>
                </div>

            </section>
        )
    }
}

BlogPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlog(slug: {eq: $slug}) { 
            title
            slug
            content {
                childMarkdownRemark {
                    html 
                }
            }
        }
    }
`

