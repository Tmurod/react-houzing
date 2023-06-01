import { useRef, useState } from "react";
import { Button } from "../generics/button/style";
import { Input } from "../generics/input/style";
import { Container, Icon, FilterMenu, FilterRows } from "./style";
import { Dropdown } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import usereplace from "../../hooks/useReplace";

const Filter = () => {
  const [open, setOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const codeRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minRef = useRef();
  const maxRef = useRef();

  const change = (e) => {
    navigate(`${location?.pathname}${usereplace(e.target.value, e.target.name)}`);
  }
  const menu = [{
    label: <FilterMenu>
      <>
        <h1 className="title">Address</h1>
        <FilterRows>
          <Input onChange={change} placeholder="Country" name="country" ref={countryRef} defaultValue={query.get("country")} />
          <Input placeholder="Region" ref={regionRef} />
          <Input placeholder="City" ref={cityRef} />
          <Input placeholder="Zip code" ref={codeRef} />
        </FilterRows>
        <h1 className="title">Apartment info</h1>
        <FilterRows>
          <Input placeholder="Rooms" ref={roomsRef} />
          <Input placeholder="Size" ref={sizeRef} />
          <Input placeholder="Sort" ref={sortRef} />
        </FilterRows>
        <h1 className="title">Price</h1>
        <FilterRows>
          <Input placeholder="Min price" ref={minRef} />
          <Input placeholder="Max price" ref={maxRef} />
        </FilterRows>
        <FilterRows className="footer">
          <Button type={"light"}>Cancel</Button>
          <Button>Submit</Button>
        </FilterRows>
      </>
    </FilterMenu>,
    key: '0'
  },
  ]

  return (
    <Container>
      <Input placeholder="Enter an address, neighborhood, city, or ZIP code" />
      <Dropdown
        open={open}
        menu={{ items: menu, }}
        placement="bottomRight"
        trigger={'click'}
        arrow={{ pointAtCenter: true }}
        onOpenChange={() => setOpen(!open)}
      >
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