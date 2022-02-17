import React from "react";

import { Card, Space, Tag } from "antd";

const { Meta } = Card;

const PokeCard = ({ poke }) => {
  console.log({ poke });

  return (
    <Card
      hoverable={true}
      bordered={false}
      style={{ width: 240 }}
      cover={<img alt={poke.imgAlt} src={poke.imgSrc} />}
    >
      <p>{`No. ${poke.id}`}</p>
      <Meta
        title={poke.title}
        description={
          <Space size="small">
            {poke.tags.map((tag) => (
              <Tag color={tag.color}>{tag.title}</Tag>
            ))}
          </Space>
        }
      />
    </Card>
  );
};

export default PokeCard;
