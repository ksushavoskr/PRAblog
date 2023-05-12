import {
  NotionRenderer,
  Equation,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x"
import { TPost } from "@/src/types"
import React from "react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"


const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "");
}

type Props = {
  blockMap: any
  data: TPost
  nextPostSlug?: string
}

const PostDetail: React.FC<Props> = ({ blockMap, data, nextPostSlug }) => {
  return (
    <div
      className={`post-wrapper`}
    >
      <article className="max-w-full">
        {data.type[0] === "Post" && <PostHeader data={data} />}
        {blockMap && (
          <div className="mt-4">
            <NotionRenderer
              recordMap={blockMap}
              components={{
                equation: Equation,
                code: Code,
                collection: Collection,
                collectionRow: CollectionRow,
              }}
              mapPageUrl={mapPageUrl}
            />
          </div>
        )}
       
      </article>
    </div>
  )
}

export default PostDetail
