import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utility/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  mall: boolean;
};

export function StoreItem({ id, name, price, imgUrl, mall }: StoreItemProps) {
  let quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        {mall ? (
          <img
            src="https://img.alicdn.com/imgextra/i2/O1CN01m9OC6a1UK86X51Dcq_!!6000000002498-2-tps-108-54.png"
            alt="mall"
            className="d-flex me-auto align-items-center justify-content-start"
            style={{ height: "18%" }}
          />
        ) : (
          <></>
        )}
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2" style={{ color: "#f85606" }}>
            {formatCurrency(price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          <Button className="w-100">+ Add To Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
