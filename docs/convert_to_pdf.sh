#!/bin/bash

# Function to convert HTML to PDF using Safari print
convert_html_to_pdf() {
    local html_file=$1
    local pdf_file=$2
    
    # Get absolute paths
    local html_abs=$(cd "$(dirname "$html_file")" && pwd)/$(basename "$html_file")
    local pdf_abs=$(cd "$(dirname "$pdf_file")" && pwd)/$(basename "$pdf_file")
    
    # Create temporary PDF save directory
    local temp_pdf_dir="/tmp/pdf_exports_$$"
    mkdir -p "$temp_pdf_dir"
    
    # Use built-in macOS print capabilities
    # Open in default browser and use print to PDF
    osascript << APPLESCRIPT
        tell application "Google Chrome"
            activate
            set newWin to make new window
            open "$html_abs"
            delay 2
            tell newWin
                tell application "System Events"
                    keystroke "p" using command down
                    delay 1
                    keystroke tab using shift down
                    delay 0.5
                    keystroke " "
                    delay 1
                    keystroke "1"
                    delay 0.5
                    keystroke return
                    delay 0.5
                    keystroke "s" using command down
                    delay 1
                    type "$pdf_abs"
                    keystroke return
                    delay 2
                end tell
            end tell
        end tell
    APPLESCRIPT
    
    # Check if PDF was created
    if [ -f "$pdf_abs" ]; then
        echo "✓ Created $pdf_file"
        return 0
    else
        echo "✗ Failed to create $pdf_file"
        return 1
    fi
}

# Check if Chrome is available
if ! command -v "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" &> /dev/null; then
    echo "Chrome not found, trying alternative method..."
    
    # Use system's print capabilities directly
    for file in *-print.html; do
        if [ -f "$file" ]; then
            pdf_file="${file%-print.html}.pdf"
            html_abs=$(pwd)/"$file"
            pdf_abs=$(pwd)/"$pdf_file"
            
            # Use lp command with CUPS
            if command -v lp &> /dev/null; then
                lp -h localhost "$html_abs" -d "Save as PDF" -o "PDFFilename=$pdf_abs" 2>/dev/null
                [ -f "$pdf_abs" ] && echo "✓ Created $pdf_file" || echo "✗ Failed to create $pdf_file"
            fi
        fi
    done
else
    # Files to convert
    echo "Converting HTML files to PDF using Chrome..."
    
    convert_html_to_pdf "عقد تطوير تطبيق ومنصة ويب للإرشاد الرياضي-print.html" "عقد تطوير تطبيق ومنصة ويب للإرشاد الرياضي.pdf"
    convert_html_to_pdf "Sprint 1-print.html" "Sprint 1.pdf"
    convert_html_to_pdf "Sprint 2-print.html" "Sprint 2.pdf"
fi

