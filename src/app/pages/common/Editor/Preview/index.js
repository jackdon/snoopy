import React from "react";
import CodeBlock from "app/components/CodeBlock";
import Header from "../Header";
import Markdown from "react-markdown";
import InlineCode from "app/components/InlineCode";
import ImageBlock from "app/components/ImageBlock";
import moment from "moment";
import Footer from "app/pages/Footer";
import { Container } from "./elements";

export default function({ title, author, coverUrl, tags, createTime, mdContent, onEditClicked }) {
  return (
    <Container>
      <Header
        title={title}
        bgUrl={coverUrl || 'http://snp-assets.oss-cn-shanghai.aliyuncs.com/blog_covers/cover_javascript1.jpeg'}
        onEditClicked={onEditClicked}
        praiseCount={0}
        author={author}
        tags={tags}
        createTime={createTime? moment(createTime).format('MM/DD YYYY') : null}
      />
      <Markdown
        className="md-view"
        source={mdContent}
        skipHtml={false}
        escapeHtml={false}
        renderers={{ code: CodeBlock, inlineCode: InlineCode, image: ImageBlock }}
      />
      <Footer color={'#5B5B5B'} />
    </Container>
  );
}
