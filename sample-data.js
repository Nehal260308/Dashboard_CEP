// Sample data loader
function loadSampleData() {
    // Sample data for Manthan
    db.data['Manthan'] = {
        posters: [{
            id: 1,
            title: "Mumbai Walking Trends",
            description: "BMC & MMRDA reveal walking trends - 51% Mumbai residents walk for daily commute",
            image: "data:image/png;base64,sample", // Placeholder
            date: "17/10/2024"
        }],
        wardMaps: [{
            id: 2,
            title: "Borivali Ward Map",
            url: "https://www.google.com/maps/d/u/0/edit?mid=1SskuVxgsfp3uR6BO0Bzfy7XrdLf9Kng&usp=sharing",
            description: "Interactive ward map with key locations",
            date: "17/10/2024"
        }],
        skywalks: [{
            id: 3,
            title: "Borivali Skywalk Audit",
            description: "Comprehensive audit of skywalk infrastructure and accessibility",
            images: [
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIDE8L3RleHQ+PC9zdmc+",
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIDI8L3RleHQ+PC9zdmc+",
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjYmJiIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIDM8L3RleHQ+PC9zdmc+"
            ],
            date: "17/10/2024"
        }],
        surveys: [{
            id: 4,
            title: "Manthan Walkability Survey Responses",
            data: {
                headers: ["Name", "Age", "Residential_Area", "Work_Area", "Daily_Walk", "Residential_Rating", "Work_Rating", "Day_Safety", "Night_Safety"],
                rows: [
                    {"Name": "Manthan Pagaria", "Age": "18-20", "Residential_Area": "Borivali East", "Work_Area": "Bandra West", "Daily_Walk": "Yes", "Residential_Rating": "7", "Work_Rating": "6", "Day_Safety": "4", "Night_Safety": "4"},
                    {"Name": "Vedant Mhatre", "Age": "25-30", "Residential_Area": "Dombivli", "Work_Area": "Andheri East", "Daily_Walk": "Yes", "Residential_Rating": "8", "Work_Rating": "6", "Day_Safety": "2", "Night_Safety": "5"},
                    {"Name": "Mahek Shah", "Age": "18-20", "Residential_Area": "Borivali", "Work_Area": "Vile Parle", "Daily_Walk": "Yes", "Residential_Rating": "9", "Work_Rating": "9", "Day_Safety": "3", "Night_Safety": "5"},
                    {"Name": "Sneha Pagaria", "Age": "Under 18", "Residential_Area": "Borivali", "Work_Area": "Borivali west", "Daily_Walk": "Yes", "Residential_Rating": "6", "Work_Rating": "4", "Day_Safety": "3", "Night_Safety": "3"},
                    {"Name": "Devansh Mody", "Age": "18-20", "Residential_Area": "Borivali", "Work_Area": "Ville parla", "Daily_Walk": "Yes", "Residential_Rating": "7", "Work_Rating": "7", "Day_Safety": "4", "Night_Safety": "4"},
                    {"Name": "Vedant Kanekar", "Age": "18-20", "Residential_Area": "Borivali", "Work_Area": "Bandra west", "Daily_Walk": "Yes", "Residential_Rating": "6", "Work_Rating": "5", "Day_Safety": "4", "Night_Safety": "4"},
                    {"Name": "Kevin Synet", "Age": "18-20", "Residential_Area": "Ulhasnagar", "Work_Area": "Bandra West", "Daily_Walk": "Yes", "Residential_Rating": "7", "Work_Rating": "8", "Day_Safety": "5", "Night_Safety": "5"},
                    {"Name": "Diva", "Age": "18-20", "Residential_Area": "Andheri", "Work_Area": "Bandra", "Daily_Walk": "No", "Residential_Rating": "7", "Work_Rating": "3", "Day_Safety": "2", "Night_Safety": "5"},
                    {"Name": "Aarya", "Age": "18-20", "Residential_Area": "Goregaon", "Work_Area": "Bandra West", "Daily_Walk": "Yes", "Residential_Rating": "8", "Work_Rating": "6", "Day_Safety": "3", "Night_Safety": "4"},
                    {"Name": "Vansh Shah", "Age": "18-20", "Residential_Area": "Borivali", "Work_Area": "Churchgate", "Daily_Walk": "Yes", "Residential_Rating": "10", "Work_Rating": "9", "Day_Safety": "5", "Night_Safety": "5"},
                    {"Name": "Kinjal", "Age": "18-20", "Residential_Area": "Kandivali", "Work_Area": "Bandra", "Daily_Walk": "Yes", "Residential_Rating": "7", "Work_Rating": "1", "Day_Safety": "1", "Night_Safety": "5"},
                    {"Name": "Dev", "Age": "18-20", "Residential_Area": "Vasai", "Work_Area": "Bandra west", "Daily_Walk": "Yes", "Residential_Rating": "9", "Work_Rating": "9", "Day_Safety": "5", "Night_Safety": "5"},
                    {"Name": "Niranjan Shanbhag", "Age": "18-20", "Residential_Area": "Goregaon East", "Work_Area": "Bandra West", "Daily_Walk": "Yes", "Residential_Rating": "7", "Work_Rating": "6", "Day_Safety": "4", "Night_Safety": "4"},
                    {"Name": "Nisarg", "Age": "Under 18", "Residential_Area": "Borivali", "Work_Area": "Kandivali", "Daily_Walk": "Yes", "Residential_Rating": "3", "Work_Rating": "8", "Day_Safety": "4", "Night_Safety": "5"},
                    {"Name": "Aditya Nambiar", "Age": "18-20", "Residential_Area": "Vasai", "Work_Area": "Bandra West", "Daily_Walk": "No", "Residential_Rating": "0", "Work_Rating": "4", "Day_Safety": "4", "Night_Safety": "4"},
                    {"Name": "Dylan", "Age": "18-20", "Residential_Area": "Andheri", "Work_Area": "Bandra", "Daily_Walk": "Yes", "Residential_Rating": "1", "Work_Rating": "6", "Day_Safety": "1", "Night_Safety": "1"},
                    {"Name": "Piyush", "Age": "20-25", "Residential_Area": "Vasai", "Work_Area": "Bandra", "Daily_Walk": "Yes", "Residential_Rating": "8", "Work_Rating": "8", "Day_Safety": "5", "Night_Safety": "5"},
                    {"Name": "Shravani", "Age": "18-20", "Residential_Area": "Lowerparel", "Work_Area": "Bandra", "Daily_Walk": "Yes", "Residential_Rating": "4", "Work_Rating": "4", "Day_Safety": "4", "Night_Safety": "4"},
                    {"Name": "Ankit", "Age": "18-20", "Residential_Area": "Vasai", "Work_Area": "Bandra", "Daily_Walk": "Yes", "Residential_Rating": "7", "Work_Rating": "7", "Day_Safety": "2", "Night_Safety": "4"},
                    {"Name": "Bliss Gonsalves", "Age": "18-20", "Residential_Area": "Virar", "Work_Area": "Bandra", "Daily_Walk": "Yes", "Residential_Rating": "5", "Work_Rating": "5", "Day_Safety": "4", "Night_Safety": "5"},
                    {"Name": "Nemi Gada", "Age": "18-20", "Residential_Area": "Lower Parel", "Work_Area": "Bandra", "Daily_Walk": "Yes", "Residential_Rating": "7", "Work_Rating": "7", "Day_Safety": "4", "Night_Safety": "4"}
                ]
            },
            date: "16/08/2024"
        }],
        interviews: [{
            id: 5,
            title: "Resident Interview - Walking Habits",
            description: "Interview about daily walking patterns and infrastructure needs",
            media: "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT",
            type: "audio",
            date: "17/10/2024"
        }],
        mapillary: [{
            id: 6,
            title: "Street View Mapping",
            url: "https://www.mapillary.com/app/?lat=19.2&lng=72.8&z=12",
            description: "Street-level imagery for infrastructure analysis",
            images: [
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDI4NWY0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TdHJlZXQgVmlldzwvdGV4dD48L3N2Zz4="
            ],
            date: "17/10/2024"
        }],
        problems: [{
            id: 7,
            title: "Route Optimization Algorithm",
            url: "https://github.com/manthan-backup/route-optimizer",
            description: "Algorithm to find optimal walking routes considering infrastructure",
            tags: ["algorithm", "routing", "optimization"],
            date: "17/10/2024"
        }]
    };

    // Sample data for Nemi
    db.data['Nemi'] = {
        posters: [{
            id: 8,
            title: "Accessibility Survey Results",
            description: "Survey findings on pedestrian accessibility in Mumbai",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM5YzEyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BY2Nlc3NpYmlsaXR5PC90ZXh0Pjwvc3ZnPg==",
            date: "17/10/2024"
        }],
        wardMaps: [{
            id: 9,
            title: "Accessibility Map",
            url: "https://example.com/accessibility-map",
            description: "Map showing accessible routes and facilities",
            date: "17/10/2024"
        }],
        skywalks: [{
            id: 10,
            title: "Accessibility Audit",
            description: "Audit of skywalk accessibility features",
            images: [
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTBiOTgxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BY2Nlc3MgQXVkaXQ8L3RleHQ+PC9zdmc+"
            ],
            date: "17/10/2024"
        }],
        surveys: [{
            id: 11,
            title: "Nemi Walkability Survey",
            data: {
                headers: ["Location", "Walkability_Score", "Accessibility_Rating", "Safety_Rating", "Infrastructure_Quality", "Main_Issues"],
                rows: [
                    {"Location": "Lower Parel Station", "Walkability_Score": "6", "Accessibility_Rating": "4", "Safety_Rating": "7", "Infrastructure_Quality": "5", "Main_Issues": "Crowded footpaths"},
                    {"Location": "Bandra West", "Walkability_Score": "8", "Accessibility_Rating": "7", "Safety_Rating": "8", "Infrastructure_Quality": "8", "Main_Issues": "Parking on footpaths"},
                    {"Location": "Worli Sea Face", "Walkability_Score": "9", "Accessibility_Rating": "8", "Safety_Rating": "9", "Infrastructure_Quality": "9", "Main_Issues": "None"},
                    {"Location": "Dadar Station", "Walkability_Score": "4", "Accessibility_Rating": "3", "Safety_Rating": "5", "Infrastructure_Quality": "4", "Main_Issues": "Poor lighting, vendors"},
                    {"Location": "Marine Drive", "Walkability_Score": "10", "Accessibility_Rating": "9", "Safety_Rating": "9", "Infrastructure_Quality": "10", "Main_Issues": "Occasional crowding"},
                    {"Location": "Andheri East", "Walkability_Score": "5", "Accessibility_Rating": "4", "Safety_Rating": "6", "Infrastructure_Quality": "5", "Main_Issues": "Uneven surfaces"},
                    {"Location": "Powai", "Walkability_Score": "7", "Accessibility_Rating": "6", "Safety_Rating": "7", "Infrastructure_Quality": "7", "Main_Issues": "Limited footpaths"},
                    {"Location": "Colaba", "Walkability_Score": "8", "Accessibility_Rating": "7", "Safety_Rating": "8", "Infrastructure_Quality": "8", "Main_Issues": "Tourist crowds"},
                    {"Location": "Juhu Beach", "Walkability_Score": "9", "Accessibility_Rating": "8", "Safety_Rating": "8", "Infrastructure_Quality": "8", "Main_Issues": "Sand on walkways"},
                    {"Location": "Malad West", "Walkability_Score": "5", "Accessibility_Rating": "4", "Safety_Rating": "5", "Infrastructure_Quality": "4", "Main_Issues": "Poor maintenance"}
                ]
            },
            date: "15/10/2024"
        }],
        interviews: [{
            id: 12,
            title: "Accessibility Interview",
            description: "Interview with accessibility advocate",
            media: "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT",
            type: "audio",
            date: "17/10/2024"
        }],
        mapillary: [{
            id: 13,
            title: "Accessibility Mapping",
            url: "https://www.mapillary.com/app/?lat=19.1&lng=72.9&z=12",
            description: "Street imagery for accessibility analysis",
            images: [
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGI1Y2Y2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5NYXBpbGxhcnk8L3RleHQ+PC9zdmc+"
            ],
            date: "17/10/2024"
        }],
        problems: [{
            id: 14,
            title: "Accessibility Calculator",
            url: "https://github.com/nemi/accessibility-calc",
            description: "Tool to calculate accessibility scores",
            tags: ["accessibility", "calculator", "tool"],
            date: "17/10/2024"
        }]
    };

    // Empty data for Vihan
    db.data['Vihan'] = {
        posters: [],
        wardMaps: [],
        skywalks: [],
        surveys: [],
        interviews: [],
        mapillary: [],
        problems: []
    };
}
