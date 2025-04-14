import re
import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()
client = Groq(api_key=os.getenv("OOAD_AI_API_KEY"))

def summarize_email(text: str):
    response = client.chat.completions.create(
        model="deepseek-r1-distill-llama-70b",
        messages=[{"role": "system", 
                   "content": "Summarize the following email in a concise and professional manner. Respond only with the summary, STRICTLY don't include the <think> tags and ensure it is shorter and a perfect brief of the original text."},
                  {"role": "user", "content": text}]
    )
    # print(response.choices[0].message.content)
    return remove_think_content(response.choices[0].message.content)

def remove_think_content(response: str) -> str:
    # Use regex to remove everything between <think> and </think>\n\n
    cleaned_response = re.sub(r"<think>.*?</think>\n\n", "", response, flags=re.DOTALL)
    return cleaned_response

# Example usage
# response = """<think>\nOkay, I need to summarize this email from Sarah Mehta, the COO. Let me read through it carefully.\n\nThe email starts by thanking everyone for attending the all-hands meeting and for their questions. She mentions high engagement, which is positive. Then she moves on to Q2 goals, noting that they're adjusting quarterly goals due to market shifts, especially focusing on a mobile-first strategy. Engineering and Design are reprioritizing features and UI elements for better performance on lower-end devices and broader accessibility.\n\nNext, she emphasizes cross-functional collaboration and introduces weekly syncs between Product, Marketing, and Support every Tuesday starting next week. She reminds people to check their calendars for invites.\n\nShe then talks about a 4-day work week pilot in May for Engineering, Design, and QA teams, with more details coming from HR. The goal is to improve work-life balance without losing productivity.\n\nShe also addresses time zone issues for remote teams and mentions they're evaluating new scheduling tools, inviting people to participate in testing via Slack.\n\nShe recognizes the Infrastructure team's work on the migration, acknowledging their efforts and success. She reminds everyone to fill out the quarterly survey to help improve internal processes and culture.\n\nFinally, she encourages the team to keep up the good work and offers her availability for any discussions.\n\nSo, the key points are: thanks for the meeting, Q2 goals adjustment (mobile-first), cross-department syncs, 4-day workweek pilot, time zone tool testing, recognition of Infrastructure team, survey reminder, and an encouraging closing.\n</think>\n\nThe email from Sarah Mehta, COO, thanks the team for their engagement in the all-hands meeting and outlines key updates for Q2. Quarterly goals are being adjusted to focus on a mobile-first strategy, with Engineering and Design prioritizing features and UI improvements for better accessibility. Weekly cross-functional syncs between Product, Marketing, and Support will start next Tuesday. A 4-day workweek pilot will begin in May for selected teams, with details from HR. Time zone coordination tools are being tested, and participation is invited via Slack. The Infrastructure team is recognized for their successful migration efforts. A quarterly survey reminder is included to gather feedback on internal processes and culture. The email concludes with encouragement to maintain momentum and an open invitation for discussions."""

# cleaned_response = remove_think_content(response)
# print(cleaned_response)