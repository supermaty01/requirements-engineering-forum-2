const creativityTriggers = {
    '01': {
        name: 'Accessibility',
        expectations: [
            {
                wordSet: ['Be', 'Website', 'By', 'Reader', 'The', 'Screen', 'Can', 'A', 'Information', 'Readed'],
                answer: "The website information can be readed by a screen reader",
                pending: true
            },
            {
                wordSet: ['Will', 'Images', 'The', 'A', 'Have', 'Description'],
                answer: "The images will have a description",
                pending: true
            },
            {
                wordSet: ['Will', 'Material', 'Have', 'The', 'Audiovisual', 'Subtitles'],
                answer: "The audiovisual material will have subtitles",
                pending: true
            }
        ]
    },
    '02': {
        name: 'Eco-friendly',
        expectations: [
            {
                wordSet: ['Will', 'Have', 'Energy', 'The', 'Product', 'Low', 'Consumption'],
                answer: 'The product will have low energy consumption',
                pending: true
            },
            {
                wordSet: ['Consumption', 'Website', 'Energy', 'The', 'The', 'To', 'Order', 'In', 'Optimize', 'Reduce'],
                answer: 'Optimize the Website in order to reduce the energy consumption',
                pending: true
            },
            {
                wordSet: ['The', 'Of', 'Lifecycle', 'And', 'Usage', 'Data', 'Reduce', 'The', 'Data', 'Manage', 'Stored'],
                answer: 'Reduce the data usage and manage the lifecycle of stored data',
                pending: true
            }
        ]
    },
    '03': {
        name: 'Portable',
        expectations: [
            {
                wordSet: ['To', 'Adapts', 'Any', 'Device', 'Website', 'The'],
                answer: 'The website adapts to any device',
                pending: true
            },
            {
                wordSet: ['The', 'App', 'An', 'With', 'The', 'Most', 'Important', 'Has', 'Website', 'Features'],
                answer: 'The website has an app with the most important features',
                pending: true
            },
            {
                wordSet: ['Devices', 'Processor', 'Compact', 'Low', 'Utilization', 'For'],
                answer: 'Low processor utilization for compact devices',
                pending: true
            }
        ]
    },
    '04': {
        name: 'Refined',
        expectations: [
            {
                wordSet: ['Website', 'The', 'Has', 'A', 'Light', 'Palette', 'Color'],
                answer: 'The website has a light color palette',
                pending: true
            },
            {
                wordSet: ['Must', 'The', 'Dynamic', 'A', 'Have', 'Website', 'Transition', 'Page'],
                answer: 'The website must have a dynamic page transition',
                pending: true
            },
            {
                wordSet: ['Have', 'Must', 'Search', 'The', 'Site', 'A', 'Website'],
                answer: 'The website must have a site search',
                pending: true
            }
        ]
    },
    '05': {
        name: 'Powerful',
        expectations: [
            {
                wordSet: ['The', 'Features', 'Website', 'Must', 'Optimized', 'Have'],
                answer: 'The website must have optimized features',
                pending: true
            },
            {
                wordSet: ['Low', 'Response', 'Times'],
                answer: 'Low response times',
                pending: true
            },
            {
                wordSet: ['Functions', 'Secondary', 'To', 'Optimize', 'Microservices'],
                answer: 'Microservices to optimize secondary functions',
                pending: true
            }
        ]
    },
    '06': {
        name: 'Involvement',
        expectations: [
            {
                wordSet: ['Have', 'The', 'User', 'Recommendations', 'Will', 'Section', 'Website', 'A', 'For'],
                answer: 'The website will have a section for user recommendations',
                pending: true
            },
            {
                wordSet: ['The', 'Can', 'On', 'User', 'Comment', 'Publications'],
                answer: 'The user can comment on publications',
                pending: true
            },
            {
                wordSet: ['Users', 'And', 'Products', 'Of', 'Can', 'Provide', 'Reviews', 'Services'],
                answer: 'Users can provide reviews of products and services',
                pending: true
            }
        ]
    },
    '07': {
        name: 'Ingenious',
        expectations: [
            {
                wordSet: ['Recommendations', 'The', 'Website', 'Will', 'Provide', 'The', 'User', 'To'],
                answer: 'The website will provide recommendations to the user',
                pending: true
            },
            {
                wordSet: ['Of', 'App', 'The', 'Simultaneous', 'And', 'The', 'Connection', 'Website'],
                answer: 'Simultaneous connection of the website and the app',
                pending: true
            },
            {
                wordSet: ['Website', 'Will', 'The', 'The', 'Products', 'User', 'To', 'Recommend'],
                answer: 'The website will recommend products to the user',
                pending: true
            }
        ]
    },
    '08': {
        name: 'Attractive',
        expectations: [
            {
                wordSet: ['An', 'The', 'Will', 'Color', 'Eye-catching', 'Palette', 'Have', 'Website'],
                answer: 'The website will have an eye-catching color palette',
                pending: true
            },
            {
                wordSet: ['Dynamically', 'Will', 'Sized', 'Be', 'Images', 'Website'],
                answer: 'Website images will be dynamically sized',
                pending: true
            },
            {
                wordSet: ['Will', 'The', 'Have', 'Website', 'Content', 'Eye-catching'],
                answer: 'The website will have eye-catching content',
                pending: true
            }
        ]
    },
    '09': {
        name: 'Uncommon',
        expectations: [
            {
                wordSet: ['Figures', 'Three-dimensional', 'The', 'Will', 'Product', 'Manufacture'],
                answer: 'The product will manufacture three-dimensional figures',
                pending: true
            },
            {
                wordSet: ['Product', 'The', 'Control', 'Will', 'Phone', 'The'],
                answer: 'The product will control the phone',
                pending: true
            }
        ]
    },
    '10': {
        name: 'Cohesion',
        expectations: [
            {
                wordSet: ['Displays', 'Tracking', 'Website', 'Order', 'The', 'The'],
                answer: 'The website displays the order tracking',
                pending: true
            },
            {
                wordSet: ['The', 'A', 'Of', 'Code', 'Tracking', 'Provide', 'Status', 'Will', 'The', 'Visualize', 'The', 'To', 'Website', 'Order'],
                answer: 'The Website will provide a tracking code to visualize the status of the order',
                pending: true
            },
            {
                wordSet: ['Site', 'Help', 'Support', 'Have', 'Customers', 'Will', 'The', 'Your', 'To'],
                answer: 'The site will have support to help your customers',
                pending: true
            }
        ]
    },
    '11': {
        name: 'Amusement',
        expectations: [
            {
                wordSet: ['Loading', 'On', 'Will', 'Screen', 'Have', 'Video', 'The', 'A', 'Mini-game', 'Game'],
                answer: 'Video game will have a mini-game on the loading screen',
                pending: true
            },
            {
                wordSet: ['Entertainment', 'Website', 'Have', 'The', 'Content', 'Will'],
                answer: 'The Website will have entertainment content',
                pending: true
            },
            {
                wordSet: ['The', 'Content', 'Product', 'Will', 'Have', 'Music'],
                answer: 'The product will have music content',
                pending: true
            }
        ]
    },
    '12': {
        name: 'Surprising',
        expectations: [
            {
                wordSet: ['Images', 'From', 'Generate', 'The', 'Website', 'Words', 'Will'],
                answer: 'The Website will generate images from words',
                pending: true
            },
            {
                wordSet: ['From', 'Text', 'A', 'Generate', 'Website', 'Summary', 'Will'],
                answer: 'Website will generate a summary from text',
                pending: true
            },
            {
                wordSet: ['Housework', 'The', 'Will', 'Do', 'The', 'Robot'],
                answer: 'The robot will do the housework',
                pending: true
            }
        ]
    },
    '13': {
        name: 'Smallness',
        expectations: [
            {
                wordSet: ['Compact', 'Will', 'But', 'Information', 'Concise', 'Website', 'Be', 'The', 'With'],
                answer: 'The website will be compact but concise with information',
                pending: true
            },
            {
                wordSet: ['Foldable', 'Will', 'Be', 'Phone', 'The', 'Cell'],
                answer: 'The cell phone will be foldable',
                pending: true
            },
            {
                wordSet: ['Compact', 'Have', 'The', 'Be', 'Storage', 'Product', 'Will', 'And', 'Large', 'Capacity', 'Will'],
                answer: 'The product will have large storage capacity and will be compact',
                pending: true
            }
        ]
    },
    '14': {
        name: 'Comfort',
        expectations: [
            {
                wordSet: ['Provide', 'Website', 'The', 'Will', 'The', 'To', 'Support', 'User'],
                answer: 'The website will provide support to the user',
                pending: true
            },
            {
                wordSet: ['The', 'Have', 'Car', 'Autopilot', 'Will'],
                answer: 'The car will have autopilot',
                pending: true
            },
            {
                wordSet: ['The', 'Music', 'Will', 'Play', 'Product', 'Relaxing'],
                answer: 'The product will play relaxing music',
                pending: true
            }
        ]
    },
    '15': {
        name: 'Novelty',
        expectations: [
            {
                wordSet: ['Facial', 'Recognition', 'The', 'Have', 'Device', 'Will'],
                answer: 'The device will have facial recognition',
                pending: true
            },
            {
                wordSet: ['Will', 'Have', 'The', 'Text', 'Device', 'Recognition'],
                answer: 'The device will have text recognition',
                pending: true
            },
            {
                wordSet: ['Will', 'Recognition', 'Have', 'Device', 'The', 'Fingerprint'],
                answer: 'The device will have fingerprint recognition',
                pending: true
            }
        ]
    },
    '16': {
        name: 'Technology',
        expectations: [
            {
                wordSet: ['Will', 'With', 'Recommendations', 'Intelligence', 'Web', 'The', 'Artificial', 'Make'],
                answer: 'The web will make recommendations with Artificial Intelligence',
                pending: true
            },
            {
                wordSet: ['Implement', 'Iot', 'The', 'Product', 'Will'],
                answer: 'The product will implement IOT',
                pending: true
            },
            {
                wordSet: ['Models', 'The', 'Use', 'Product', 'Statistical', 'Will'],
                answer: 'The product will use statistical models',
                pending: true
            }
        ]
    },
    '17': {
        name: 'Feeling',
        expectations: [
            {
                wordSet: ['Material', 'Web', 'Audiovisual', 'The', 'On', 'For', 'The', 'Multiple', 'Allow', 'Will', 'Playback'],
                answer: 'The audiovisual material on the web will allow for multiple playback',
                pending: true
            },
            {
                wordSet: ['Reality', 'The', 'Implement', 'Augmented', 'Product', 'Will'],
                answer: 'The product will implement augmented reality',
                pending: true
            },
            {
                wordSet: ['The', 'Home', 'Will', 'Cinema', '4d', 'At', 'Implement', 'Product'],
                answer: 'The product will implement 4D cinema at home',
                pending: true
            }
        ]
    },
    '18': {
        name: 'Independence',
        expectations: [
            {
                wordSet: ['Will', 'The', 'Energy', 'Wind', 'Work', 'Product', 'With'],
                answer: 'The product will work with wind energy',
                pending: true
            },
            {
                wordSet: ['The', 'Energy', 'Work', 'With', 'Hydraulic', 'Product', 'Will'],
                answer: 'The product will work with hydraulic energy',
                pending: true
            },
            {
                wordSet: ['Have', 'Website', 'Microservices', 'The', 'Won’t'],
                answer: 'The website won’t have microservices',
                pending: true
            }
        ]
    },
    '19': {
        name: 'Conception',
        expectations: [
            {
                wordSet: ['A', 'Artist', 'The', 'Create', 'Famous', 'To', 'Background', 'Hire', 'Image'],
                answer: 'Hire a famous artist to create the background image',
                pending: true
            },
            {
                wordSet: ['Sources', 'Use', 'Energy', 'Will', 'Product', 'Various', 'The'],
                answer: 'The product will use various energy sources',
                pending: true
            }
        ]
    },
    '20': {
        name: 'Humerous',
        expectations: [
            {
                wordSet: ['Filters', 'Face', 'The', 'With', 'The', 'Product', 'Will', 'Modify'],
                answer: 'The product will modify the face with filters',
                pending: true
            },
            {
                wordSet: ['Will', 'Voices', 'Product', 'Modify', 'The'],
                answer: 'The product will modify voices',
                pending: true
            },
            {
                wordSet: ['Will', 'The', 'Videos', 'Funny', 'Product', 'Show'],
                answer: 'The product will show funny videos',
                pending: true
            }
        ]
    },
    '21': {
        name: 'Price',
        expectations: [
            {
                wordSet: ['Have', 'Plan', 'Website', 'Multiple', 'Subscription', 'For', 'Users', 'Offers', 'The', 'The', 'Will'],
                answer: 'The website will have multiple subscription plan offers for the users',
                pending: true
            },
            {
                wordSet: ['Trial', 'Offer', 'A', 'Will', 'The', 'Website', 'Free'],
                answer: 'The website will offer a free trial',
                pending: true
            },
            {
                wordSet: ['Will', 'Website', 'Ads', 'Have', 'The'],
                answer: 'The website will have ads',
                pending: true
            }
        ]
    },
    '22': {
        name: 'Up-to-date',
        expectations: [
            {
                wordSet: ['The', 'Mobility', 'Will', 'Improve', 'Product'],
                answer: 'The product will improve mobility',
                pending: true
            },
            {
                wordSet: ['Improve', 'Air', 'Product', 'Quality', 'Will', 'The'],
                answer: 'The product will improve air quality',
                pending: true
            },
            {
                wordSet: ['Health', 'Will', 'Mental', 'Professionals', 'Recommend', 'The', 'Product'],
                answer: 'The product will recommend mental health professionals',
                pending: true
            }
        ]
    },
};