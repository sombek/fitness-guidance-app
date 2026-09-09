# PDF Generation Script

Automated script to generate professional PDFs from HTML source files for contract and sprint documents.

## Features

- **Single command** to regenerate all PDFs
- **Selective generation** for individual documents
- **Professional formatting** with proper RTL support for Arabic
- **IBM Plex Sans Arabic** font for contract
- **System fonts** for sprint documents
- **A4 print-ready** output

## Installation

The script is pre-configured and ready to use. No additional installation required beyond having Google Chrome installed on your macOS system.

## Usage

### Generate all PDFs
```bash
./scripts/generate-pdfs.sh all
```

### Generate specific documents
```bash
# Contract only
./scripts/generate-pdfs.sh contract

# Sprint 1 only
./scripts/generate-pdfs.sh sprint1

# Sprint 2 only
./scripts/generate-pdfs.sh sprint2
```

## Output Files

The script generates the following PDFs in the `docs/` directory:

| Script Argument | Output File | Source |
|---|---|---|
| `contract` | `عقد تطوير تطبيق ومنصة ويب للإرشاد الرياضي.pdf` | `docs/contract.html` |
| `sprint1` | `Sprint 1.pdf` | `docs/sprint1.html` |
| `sprint2` | `Sprint 2.pdf` | `docs/sprint2.html` |

## Source Files

Edit these HTML files to update document content before regenerating PDFs:

- **`docs/contract.html`** — Arabic contract with RTL layout and IBM Plex Sans Arabic font
- **`docs/sprint1.html`** — Sprint 1 scope document
- **`docs/sprint2.html`** — Sprint 2 scope document

## Styling

All documents use:
- **Page size:** A4 (210mm × 297mm)
- **Margins:** 15mm top/bottom, 18mm left/right
- **Base font size:** 10.5pt
- **Line height:** 1.5
- **Colors:** Teal headers (#163f44) with consistent branding

## Examples

### Regenerate contract after updates
```bash
# Edit docs/contract.html, then:
./scripts/generate-pdfs.sh contract
```

### Batch regenerate during development
```bash
# Update all HTML sources, then regenerate:
./scripts/generate-pdfs.sh all
```

## Requirements

- macOS with Google Chrome installed at `/Applications/Google Chrome.app`
- Bash shell
- No additional Node.js, Python, or dependencies required

## Troubleshooting

### Script not found or permission denied
```bash
chmod +x ./scripts/generate-pdfs.sh
```

### Chrome not found
Ensure Google Chrome is installed in `/Applications/Google Chrome.app`

### Fonts not embedding in PDF
The script uses system fonts and embedded IBM Plex Sans Arabic. Fonts should render in all PDF readers.

## Automation

Integrate into your CI/CD pipeline:

```bash
# GitHub Actions example
- name: Generate PDFs
  run: ./scripts/generate-pdfs.sh all
```

Or use with git hooks:

```bash
# .git/hooks/pre-commit
./scripts/generate-pdfs.sh all
git add docs/*.pdf
```
