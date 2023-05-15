import { Button } from "../generics/button/style";
import { Input } from "../generics/input/style";
import { Container, Icon, FilterMenu, FilterRows } from "./style";
import { Dropdown } from "antd";

const Filter = () => {
  
  const menu = <FilterMenu>
        <h1 className="title">Address</h1>
      <FilterRows>
        <Input placeholder="Country" />
        <Input placeholder="Region" />
        <Input placeholder="City" />
        <Input placeholder="Zip code" />
      </FilterRows>
        <h1 className="title">Apartment info</h1>
      <FilterRows>
        <Input placeholder="Rooms" />
        <Input placeholder="Size" />
        <Input placeholder="Sort" />
      </FilterRows>
        <h1 className="title">Price</h1>
      <FilterRows>
        <Input placeholder="Min price" />
        <Input placeholder="Max price" />
      </FilterRows>
      <FilterRows className="footer">
        <Button type={"light"}>Cancel</Button>
        <Button>Submit</Button>
      </FilterRows>
    </FilterMenu>
  return (
    <Container>
      <Input placeholder="Enter an address, neighborhood, city, or ZIP code"/>
        <Dropdown
          overlay={menu}
          placement="bottomRight"
          arrow={{pointAtCenter: true}}>
          <div>
            <Button type={"light"}>
              <Icon.Advanced />
              Advanced
            </Button>
          </div>
        </Dropdown>
        <Button>
          <Icon.Search />
          Search
        </Button>
    </Container>
  );
}

export default Filter;