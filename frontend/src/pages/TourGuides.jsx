import React, { useState } from "react";
import { Container, Row, Col, Input } from "reactstrap";
import guidesData from "../assets/data/tour_guides.json";
import "../styles/tour-guides.css";

const TourGuides = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLang, setFilterLang] = useState("");

  // Filtered data
  const filteredGuides = guidesData.filter((guide) => {
    const matchesSearch = guide.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLang = filterLang
      ? guide.languages.toLowerCase().includes(filterLang.toLowerCase())
      : true;
    return matchesSearch && matchesLang;
  });

  return (
    <section className="tour-guides-page">
      <Container>
        <h2 className="text-center mb-4 title">
          🌍 Meet Our Expert Tour Guides
        </h2>
        <Row className="mb-4">
          <Col md="6" className="mb-2">
            <Input
              type="text"
              placeholder="🔍 Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md="6">
            <Input
              type="select"
              value={filterLang}
              onChange={(e) => setFilterLang(e.target.value)}
            >
              <option value="">Filter by language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Gujarati">Gujarati</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="Urdu">Urdu</option>
              <option value="Korean">Korean</option>
            </Input>
          </Col>
        </Row>
        <Row>
          {filteredGuides.map((guide, index) => (
            <Col lg="4" md="6" sm="12" key={index} className="mb-4">
              <div className="guide-card-modern">
                <div className="guide-avatar">
                  <img src={guide.photo} alt={guide.name} />
                </div>
                <h5>{guide.name}</h5>
                <span className="badge-experience">{guide.experience}</span>
                <p>
                  <strong>Languages:</strong> {guide.languages}
                </p>
                <p className="rating">⭐ {guide.rating}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TourGuides;
