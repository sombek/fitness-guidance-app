#!/bin/bash

# PDF Generator for Contract and Sprint Documents
# Usage: ./generate-pdfs.sh [contract|sprint1|sprint2|all]

set -e

DOCS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../docs" && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

if [ ! -f "$CHROME" ]; then
  echo "Error: Chrome not found at $CHROME"
  exit 1
fi

generate_pdf() {
  local html_file=$1
  local pdf_file=$2
  local doc_name=$3
  
  if [ ! -f "$html_file" ]; then
    echo "Error: $html_file not found"
    return 1
  fi
  
  echo -e "${BLUE}📄 Generating PDF: $doc_name${NC}"
  
  "$CHROME" \
    --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$pdf_file" \
    "file://$html_file" \
    > /dev/null 2>&1
  
  if [ -f "$pdf_file" ]; then
    local size=$(du -h "$pdf_file" | cut -f1)
    echo -e "${GREEN}✓ $doc_name ($size)${NC}"
    return 0
  else
    echo "Error: Failed to generate $pdf_file"
    return 1
  fi
}

generate_contract() {
  generate_pdf \
    "$DOCS_DIR/contract/source/contract.html" \
    "$DOCS_DIR/contract/عقد تطوير تطبيق ومنصة ويب للإرشاد الرياضي.pdf" \
    "Contract"
}

generate_sprint1() {
  generate_pdf \
    "$DOCS_DIR/sprints/sprint-1/source/sprint1.html" \
    "$DOCS_DIR/sprints/sprint-1/Sprint 1.pdf" \
    "Sprint 1"
}

generate_sprint2() {
  generate_pdf \
    "$DOCS_DIR/sprints/sprint-2/source/sprint2.html" \
    "$DOCS_DIR/sprints/sprint-2/Sprint 2.pdf" \
    "Sprint 2"
}

case "${1:-all}" in
  contract)
    generate_contract
    ;;
  sprint1)
    generate_sprint1
    ;;
  sprint2)
    generate_sprint2
    ;;
  all)
    generate_contract && generate_sprint1 && generate_sprint2
    echo -e "${GREEN}✓ All PDFs generated successfully${NC}"
    ;;
  *)
    echo "Usage: $0 [contract|sprint1|sprint2|all]"
    exit 1
    ;;
esac
