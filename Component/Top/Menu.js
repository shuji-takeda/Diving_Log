import React, {Component} from "react";
import Link from "next/link";
import {CardDeck, Card} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const CardStyle = {
  width: "18rem",
};

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="/image/IMG_1498.JPG" />
            <Card.Body>
              <Card.Title>
                  <Link href="/Search">
                  Search Log
                  </Link>
                  </Card.Title>
              <Card.Text>
                次は、どこのポイントに潜りに行きましょうか？？
                <br />
                ダイバー仲間が投稿したログは、こちら！！
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/image/IMG_4146.JPG" />
            <Card.Body>
              <Card.Title>
              <Link href="/Search">
              Sharing your Log
                  </Link>
                  </Card.Title>
              <Card.Text>
                あなただけのダイビングログも共有してみませんか？？
                <br />
                ご投稿お待ちしております！！
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/image/S__23953422.jpg" />
            <Card.Body>
              <Card.Title>Contact us</Card.Title>
              <Card.Text>
                「要望・アドバイス・お問い合わせ」があれば、こちらからお問い合わせ下さい！！
                <br />ご連絡お待ちしております！！
                <br />（現在、作成中です）
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Menu;
